const AlertSection = ({ annotationPrefix, body }) => {
    return <div data-sb-field-path={annotationPrefix} className="py-6 bg-primary">
        <div>
            
        </div>
        <p data-sb-field-path=".body">{body}</p>
    </div>
}

export default AlertSection