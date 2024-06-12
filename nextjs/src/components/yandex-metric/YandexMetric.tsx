'use client'
import {useEffect} from "react";
import {usePathname, useSearchParams} from 'next/navigation'

const YandexMetric = () => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
        ym(process.env.YANDEX_METRIC, "hit", window.location.href);
    }, [pathName, searchParams]);
    return null;
}
export default YandexMetric;
