const AlertSection = ({ annotationPrefix, body }) => {
    return <div data-sb-field-path={annotationPrefix} className="py-6 bg-primary">
        <div className="container mx-"
        <p data-sb-field-path=".body">{body}</p>
    </div>
}

export default AlertSection