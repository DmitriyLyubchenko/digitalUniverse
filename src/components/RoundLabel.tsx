interface IRoundLabelProps {
    innerText: string
}

export default function RoundLabel(props: IRoundLabelProps) {
    return (
        <div class="item-inner__media-element__3Fu7G item_number--sm__3Ye2H responsive__item_number--sm__3UM6f">
            <div class="w-icon-panel-wrapper">
                <div class="numbers_1Dc numbers--sm_2Sz w-text-center w-icon-panel w-icon-panel--sm w-icon-panel--numbers">
                    <div class="w-icon-panel__inner background_3lr background background--dark w-state-has-background">
                        <div class="background-wrapper_RZ2" aria-hidden="true" data-background--hide="false" data-component="background" data-type="gradient" data-data-loaded="true">
                            <div class="background_2xT" style={{background: "#ffb811"}} data-role="placeholder" data-selection-container="true"></div>
                        </div>
                        <div class="text-wrapper_38Y">
                            <p style={{fontSize:"20px"}} class="text_1-q text_1k0 ui-text w-body ui-text--light" data-component="text">
                                <span class="w-text-block">
                                    <span class="w-text-content">
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