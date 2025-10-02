import {usePathname, useSearchParams} from "next/navigation";
import {useEffect, useRef} from "react";

export const useCloseOnNavigation = (isOpen: boolean, onClose: () => void) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        if (isOpen) {
            onClose();
        }
    }, [pathname, searchParams]);
};