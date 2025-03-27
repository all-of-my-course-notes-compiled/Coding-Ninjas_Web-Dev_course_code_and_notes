export default function Input(){
   
    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input"/>
            </Row >
            <Row label="Last Name">
                    <input className="input"/>
            </Row >
        </div>

        <h2>Hello, </h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
