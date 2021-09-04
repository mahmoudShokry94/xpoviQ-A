import  { Fragment } from 'react';

interface QandAViewType {
    title:string,
    sub_title:string
}
const QandAView:React.FC<QandAViewType> = ({
    title,
    sub_title
}) => {
    return (
        <Fragment>
            <dt className="col-sm-12">{title}</dt>
            <dd className="col-sm-12">
                <p>{sub_title!=""?sub_title:"None"}</p>
            </dd>
        </Fragment>
    );
}

export default QandAView;
