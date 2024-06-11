<?php

namespace App\Http\Controllers;

use App\DataOrder;
use App\Http\Request\OrderRequest;
use App\Library\Constant;
use App\Orders;
use App\Product;
use App\Services\Order\NewOrderService;
use Illuminate\Http\Request;
use Carbon\Carbon;

class OrderController extends Controller
{
    public function newOrder(OrderRequest $request, NewOrderService $newOrderService)
    {
        $order = $newOrderService->execute($request);
        return $order;
    }

	public function addOrder(Request $request)
	{
		$arDataClient = $request->dataClient;
		$arDataProduct = $request->orderProduct;

		$arDataClient['fullPrice'] = $this->fullPriceOrder($arDataProduct);
		$obDataPerson = $this->newClientData($arDataClient);

		foreach ($arDataProduct as $dataProduct) {
			$newOrder = $this->newOrderPerson($obDataPerson['id'], $dataProduct);
			if (!$newOrder) {
				return response()->json($newOrder->getMessage(), 400);
			}
		}
		$this->sendEmailStaff($arDataProduct, $arDataClient);
		return response()->json(['status' => 'success'], 201);
	}

	/** Расчитывает полную сумму заказа
	 * @param array $arDataProduct - массив продуктов из корзины
	 * @return float|int
	 */
	public function fullPriceOrder(array $arDataProduct)
	{
		$fullPrice = 0;
		$arIds = array_column($arDataProduct, 'id');
		$arInfoProduct = Product::getByArrayId($arIds);
		foreach ($arInfoProduct->toArray() as $productInfo) {
			foreach ($arDataProduct as $productCart) {
				if ($productCart['id'] === $productInfo['id']) {
					$fullPrice += $productInfo['price'] * $productCart['selectCount'];
				}
			}
		}
		return $fullPrice;
	}

	public function newClientData($data)
	{
		$obData = new DataOrder();
		$obData->fullName = $data['fullName'];
		$obData->companyName = $data['company'] ?? null;
		$obData->description = $data['description'] ?? 'Отсутствует';
		$obData->email = $data['email'] ?? 'Не указан';
		$obData->phone = $data['phone'] ?? 'Не указан';
		$obData->fullPrice = $data['fullPrice'];
		$obData->isCompany = isset($data['company']);
		$obData->save();
		return $obData;
	}

	/**  Создаёт новую запись о заказе в таблице "Заказы персональных клиентов"
	 * @param int $idDataClient - id данных о клиенте
	 * @param array $productData - массив с данными о продукте из корзины
	 * @return array
	 */
	public function newOrderPerson(int $idDataClient, array $productData)
	{
		try {
			$obOrder = new Orders();
			$obOrder->productId = (int)$productData['id'];
			$obOrder->dataClientId = (int)$idDataClient;
			$obOrder->count = (double)$productData['selectCount'];
			$obOrder->save();
			return true;
		} catch (\Exception $e) {
			return $e;
		}
	}

	public function sendEmailStaff(array $dataProduct, array $dataClient)
	{
		$listStaff = Constant::staffSendOrderEmail;
		$messageSubject = "{$this->messageSubject} '{$dataClient['fullName']}'";
		$productData = '';
		foreach ($dataProduct as $product) {
			$productData .= "{$product['name']}, толщина: {$product['prof_list']['thickness']}, цвет:
                {$product['prof_list']['ralColorName']}(RAL {$product['prof_list']['ralColorIndex']}). Количество:
                {$product['selectCount']}.\r\n";
		}
		$data = [
			'nameClient' => ($dataClient['company'])
				? "{$dataClient['company']} || {$dataClient['fullName']}"
				: $dataClient['fullName'],
			'phoneClient' => $dataClient['phone'] ?? 'Не указан',
			'emailClient' => $dataClient['email'] ?? 'Не указан',
			'dateQuestion' => Carbon::now(),
			'commentClient' => $dataClient['description'] ?? 'Отсутствует',
			'productData' => $productData,
			'fullPrice' => $dataClient['fullPrice']
		];

		foreach ($listStaff as $staffEmail) {
			try {
				\Mail::send('orderTemplateEmail', $data, function ($message) use ($staffEmail, $messageSubject) {
					$message->to($staffEmail)->subject($messageSubject);
				});
			} catch (\Exception $exceptione) {
				return $exceptione->getMessage();
			}
		}
	}
}
