const AlertSection = ({ annotationPrefix, body }) => {
    return <div data-sb-field-path={annotationPrefix}>
        <p>{body}</p>
    </div>
}

export default AlertSection