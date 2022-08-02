

function Button({ children, version, type, isDisabled }) {
    return (
        <button type={type} disabled={isDisabled} className={`btn`}>
            {children}
        </button>
    )
}