<?php
use App\Models\Order;
/** @var Order $order */
$productData = data_get($order, 'entity.name');
?>
<table bgcolor="#f1f1f1" width="100%" style="background-color:#f1f1f1;min-width:600px">
    <tbody>
    <tr>
        <td align="center" valign="top" width="100%" style="min-width:600px">
            <center>

                <table bgcolor="#f1f1f1" border="0" cellpadding="0" cellspacing="0"
                       width="100%" style="min-width:600px">
                    <tbody>
                    <tr>
                        <td align="center">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                   style="min-width:600px">
                                <tbody>
                                <tr height="50">
                                    <td height="50" width="100%" style="font-size:1px;line-height:1px">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                               style="border-collapse:collapse;vertical-align:top">
                                            <tbody>
                                            <tr>
                                                <td align="center"
                                                    style="border-collapse:collapse;font-size:0px;padding:0 0px 0px 0px;word-break:break-word">
                                                    <a href="https://kirovprofnastil.ru">
                                                        <img width="550"
                                                             style="border:0;display:block;height:auto;line-height:100%;text-decoration:none"
                                                             src="https://kirovprofnastil.ru/logo.png" alt="Логотип компании">
                                                    </a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table bgcolor="#f1f1f1" border="0" cellpadding="0" cellspacing="0"
                       width="100%" style="min-width:600px">
                    <tbody>
                    <tr>
                        <td align="center">
                            <table bgcolor="#ffffff" border="0" cellpadding="0"
                                   cellspacing="0" width="600" style="background-color:#ffffff;min-width:600px">
                                <tbody>
                                <tr>
                                    <td align="center">
                                        <table border="0" cellpadding="0"
                                               cellspacing="0" width="560" style="min-width:560px">
                                            <tbody>
                                            <tr height="30">
                                                <td height="30" width="100%" style="font-size:1px;line-height:1px">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" width="560"
                                                    style="color:#313131;font-family:'arial' , 'helvetica' , sans-serif;font-size:16px;line-height:24px;text-align:left">
                                                    <div style="line-height:24px;text-align:center">
                                                    <span style="font-size:18px">
                                                    <p>Здравствуйте, пришёл новый запрос от клиента</p>
                                                    </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr height="15">
                                                <td height="15" width="100%" style="font-size:1px;line-height:1px">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>


                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                       style="min-width:600px">
                    <tbody>
                    <tr>
                        <td align="center">
                            <table bgcolor="#ffffff" border="0" cellpadding="0"
                                   cellspacing="0" width="600" style="background-color:#ffffff;min-width:600px">
                                <tbody>
                                <tr>
                                    <td align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" width="540">
                                            <tbody>
                                            <tr>
                                                <td style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;line-height:24px;text-align:left;text-transform:uppercase">
                                                    <div style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;text-align:left">
                                                        <p>Информация о заказе:</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr height="1">
                                                <td height="1" width="100%"
                                                    style="background-color:#e2e3e4;font-size:1px;line-height:1px">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>


                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                       style="min-width:600px">
                    <tbody>
                    <tr>
                        <td align="center">
                            <table bgcolor="#ffffff" border="0" cellpadding="0"
                                   cellspacing="0" width="600" style="background-color:#ffffff;min-width:600px">
                                <tbody>
                                <tr height="15">
                                    <td height="15" width="100%" style="font-size:1px;line-height:1px">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" width="540">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                           width="270" style="min-width:270px">
                                                        <tbody>
                                                        <tr>
                                                            <td align="center">
                                                                <div style="color:#313131;font-family:'ariel' , 'helvetica' , sans-serif;font-size:16px;line-height:24px;text-align:left">
                                                                    <strong>Дата составления запроса:</strong><br>
                                                                    {{ now()->format('Y-m-d') }}<br>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr height="15">
                                                <td height="15" width="100%" style="font-size:1px;line-height:1px">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                       style="min-width:600px">
                    <tbody>
                    <tr>
                        <td align="center">
                            <table bgcolor="#ffffff" border="0" cellpadding="0"
                                   cellspacing="0" width="600" style="background-color:#ffffff;min-width:600px">
                                <tbody>
                                <tr>
                                    <td align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" width="540">
                                            <tbody>
                                            <tr>
                                                <td style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;line-height:24px;text-align:left;text-transform:uppercase">
                                                    <div style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;text-align:left">
                                                        <p>Информация о заказчике:</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr height="1">
                                                <td height="1" width="100%"
                                                    style="background-color:#e2e3e4;font-size:1px;line-height:1px">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;line-height:24px;text-align:left;">
                                                    <div style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;text-align:left">
                                                        <strong style="color: black">ФИО клиента: </strong><span
                                                                style="color: black">{{ $order->full_name }}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;line-height:24px;text-align:left;">
                                                    <div style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;text-align:left">
                                                        <strong style="color: black">Email адрес: </strong><span
                                                                style="color: black">{{ $order->email ?: 'Не указано' }}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;line-height:24px;text-align:left;">
                                                    <div style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;text-align:left">
                                                        <strong style="color: black">Телефон: </strong><span
                                                                style="color: black">{{ $order->phone ?: 'Не указано' }}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;line-height:24px;text-align:left;">
                                                    <div style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;text-align:left">
                                                        <strong style="color: black">Комментарий: </strong><span
                                                                style="color: black">{{$order->comment ?: 'Не указано'}}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr height="15">
                                                <td height="15" width="100%" style="font-size:1px;line-height:1px">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                       style="min-width:600px">
                    <tbody>
                    <tr>
                        <td align="center">
                            <table bgcolor="#ffffff" border="0" cellpadding="0"
                                   cellspacing="0" width="600" style="background-color:#ffffff;min-width:600px">
                                <tbody>
                                <tr>
                                    <td align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" width="540">
                                            <tbody>
                                            <tr>
                                                <td style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;line-height:24px;text-align:left;text-transform:uppercase">
                                                    <div style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;text-align:left">
                                                        <p>Информация о товарах заказа:</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr height="1">
                                                <td height="1" width="100%"
                                                    style="background-color:#e2e3e4;font-size:1px;line-height:1px">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;line-height:24px;text-align:left;">
                                                    <div style="color:#b2b2b2;font-family:'arial' , 'helvetica' , sans-serif;font-size:14px;text-align:left">
                                                        <span
                                                            style="color: black">{{ $productData ?: 'Не известно' }}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr height="15">
                                                <td height="15" width="100%" style="font-size:1px;line-height:1px">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:600px">
                    <tbody>
                    <tr>
                        <td align="center">
                            <table border="0" cellpadding="0" cellspacing="0" width="600"
                                   style="min-width:600px">
                                <tbody>
                                <tr height="15">
                                    <td height="15" width="100%" style="font-size:1px;line-height:1px">&nbsp;</td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </center>
        </td>
    </tr>
    </tbody>
</table>
