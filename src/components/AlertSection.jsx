const AlertSection = ({ annotationPrefix, body }) => {
    return <div data-sb-field-path={annotationPrefix}>
        <p data>{body}</p>
    </div>
}

export default AlertSection