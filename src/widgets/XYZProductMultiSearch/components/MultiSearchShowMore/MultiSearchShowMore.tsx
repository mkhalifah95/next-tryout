import React from "react";

const MultiSearchShowMore = (props) => {
    const { classes } = props;
    const data = props.data.data;

    return (
        <React.Fragment>
            {data.widget && data.widget.moreUrl &&
                <div className={"d-flex justify-content-end " + classes.moreLinkWrapperClass}>
                    <a className={classes.moreLinkclasses} href={data.widget.moreUrl}>
                        <span>{data.widget.moreText}</span>
                    </a>
                </div>
            }
        </React.Fragment>
    )
}


export default MultiSearchShowMore;