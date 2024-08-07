type DrawingProps = {
    countToDraw: number;
};
const Drawing = ({ countToDraw }: DrawingProps) => {
    const HEAD = (
        <div
            style={{
                width: "25px",
                height: "25px",
                borderRadius: "100%",
                border: "5px solid #FAFBFC",
                position: "absolute",
                top: "25px",
                right: "-15px",
            }}
        />
    );
    const BODY = (
        <div
            style={{
                width: "5px",
                height: "50px",
                background: "#FAFBFC",
                position: "absolute",
                top: "60px",
                right: 0,
            }}
        />
    );
    const RIGHT_ARM = (
        <div
            style={{
                width: "50px",
                height: "5px",
                background: "#FAFBFC",
                position: "absolute",
                top: "75px",
                right: "-50px",
                rotate: "-15deg",
                transformOrigin: "left bottom",
            }}
        />
    );
    const LEFT_ARM = (
        <div
            style={{
                width: "50px",
                height: "5px",
                background: "#FAFBFC",
                position: "absolute",
                top: "75px",
                right: "5px",
                rotate: "15deg",
                transformOrigin: "right bottom",
            }}
        />
    );
    const RIGHT_LEG = (
        <div
            style={{
                width: "50px",
                height: "5px",
                background: "#FAFBFC",
                position: "absolute",
                top: "105px",
                right: "-45px",
                rotate: "30deg",
                transformOrigin: "left bottom",
            }}
        />
    );
    const LEFT_LEG = (
        <div
            style={{
                width: "50px",
                height: "5px",
                background: "#FAFBFC",
                position: "absolute",
                top: "105px",
                right: "0px",
                rotate: "-30deg",
                transformOrigin: "right bottom",
            }}
        />
    );

    const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
    return (
        <div style={{ position: "relative" }}>
            {BODY_PARTS.slice(0, countToDraw).map((part, index) => (
                <div key={index}>{part}</div>
            ))}

            <div
                style={{ height: "25px", width: "5px", background: "#FAFBFC", position: "absolute", top: 0, right: 0 }}
            />
            <div style={{ height: "5px", width: "100px", background: "#FAFBFC", marginLeft: "60px" }} />
            <div style={{ height: "200px", width: "5px", background: "#FAFBFC", marginLeft: "60px" }} />
            <div style={{ height: "5px", width: "125px", background: "#FAFBFC" }} />
        </div>
    );
};

export default Drawing;
