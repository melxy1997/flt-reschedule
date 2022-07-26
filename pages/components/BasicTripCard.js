export default function BasicCard({
    rId,
    cTime,
    cType,
    cState,
    flightNo,
    dDate,
    aDate,
    dTime,
    aTime,
    dCity,
    aCity
}) {
    return (<div className="card" key={rId}>
        <div className="state">{cTime} 变更({cType}) [{cState}]</div>
        ][''''''''['['[[]]]]
        <div className={(cState === 'pending') ? "entity pending" : "entity"}>
            <div className="flightNo">
                {flightNo}
            </div>
            <div className="space-between">
                <div className="date">
                    {dDate}
                </div>
                <div className="date">
                    {aDate}
                </div>
            </div>
            <div className="space-between">
                <div className="time changed">
                    {dTime}
                </div>
                <div className="time changed">
                    {aTime}
                </div>
            </div>
            <div className="space-between">
                <div className="city">
                    {dCity}
                </div>
                <div className="city">
                    {aCity}
                </div>
            </div>
        </div>
    </div>)
}