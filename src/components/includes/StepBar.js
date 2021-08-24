import React from 'react'

function StepBar({activeStatus,activeStatusPayment,successPayment}) {
    return (
        <>
            <div className="address">
                <div className="container">
                    <div className="">
                        <div class="container-bar">
                            <ul class="progressbar">
                                <li class={`${activeStatus}`}>Shipping Address</li>
                                <li class={`${activeStatusPayment}`}>Payment</li>
                                <li class={`${successPayment}`}>Order Confirmed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepBar
