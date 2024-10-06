export default function useHook() {
    [state, setState] = useState(0)
    return {state, setState}
}
