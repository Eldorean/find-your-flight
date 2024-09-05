import { useCallback, useEffect, useState } from "react";

const useAsync = <T extends Record<string, unknown>>(callback: Promise<T>) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [value, setValue] = useState<T>()

    const callbackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [callback])

    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    return { loading, error, value }
};

export default useAsync;