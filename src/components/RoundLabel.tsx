interface IRoundLabelProps {
    innerText: string
}

export default function RoundLabel(props: IRoundLabelProps) {
    return (
        <div className="item-inner__media-element__3Fu7G item_number--sm__3Ye2H responsive__item_number--sm__3UM6f">
            <div className="w-icon-panel-wrapper">
                <div className="numbers_1Dc numbers--sm_2Sz w-text-center w-icon-panel w-icon-panel--sm w-icon-panel--numbers">
                    <div className="w-icon-panel__inner background_3lr background background--dark w-state-has-background">
                        <div className="background-wrapper_RZ2" aria-hidden="true" data-background--hide="false" data-component="background" data-type="gradient" data-data-loaded="true">
                            <div className="background_2xT" style={{background: "#ffb811"}} data-role="placeholder" data-selection-container="true"></div>
                        </div>
                        <div className="text-wrapper_38Y">
                            <p style={{fontSize:"20px"}} className="text_1-q text_1k0 ui-text w-body ui-text--light" data-component="text">
                                <span className="w-text-block">
                                    <span className="w-text-content">
                                        <span style={{fontSize:"16px"}}>
                                            <span style={{fontWeight:"bold"}}>{props.innerText}</span>
                                        </span>
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}