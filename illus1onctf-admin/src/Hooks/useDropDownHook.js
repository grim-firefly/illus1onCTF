import { useEffect } from "react";

export default function useDropDownHook(ref, state, handler) {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		}
		
		if (state) {
			document.addEventListener('mousedown', listener);
			return () => {
				document.removeEventListener('mousedown', listener);
			}
		}
	}, [ref,state, handler]);
}