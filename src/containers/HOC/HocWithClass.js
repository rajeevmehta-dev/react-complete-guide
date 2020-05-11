import React from 'react';
const hocWithClass = (WrappedComponent) => {
    return (props) =>
        <div>
            <WrappedComponent></WrappedComponent>
        </div>
}
export default hocWithClass;