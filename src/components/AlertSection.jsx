const AlertSection = ({ annotationPrefix, body }) => {
    return <div data-sb-field-path={annotationPrefix} className="py-6 ">
        <p data-sb-field-path=".body">{body}</p>
    </div>
}

export default AlertSection