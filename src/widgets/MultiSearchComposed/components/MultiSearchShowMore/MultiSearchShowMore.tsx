import React from "react";

const MultiSearchShowMore = (props) => {
    const { classes } = props;
    const data = props.data.data;
    const moreText = props.moreText || data.widget.moreText

    return (
        <React.Fragment>
            {data.widget && data.widget.moreUrl &&
                <div className={"d-flex justify-content-end " + classes.moreLinkWrapperClass}>
                    <a className={classes.moreLinkclasses} href={data.widget.moreUrl}>
                        <span>{moreText}</span>
                    </a>
                </div>
            }
        </React.Fragment>
    )
}


export default MultiSearchShowMore;