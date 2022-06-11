import React from "react";
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';

let myGraph = {nodes:[{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}]};

const Testvis = () => {
    return(
        <><div>
            <h1>Je suis le testvis</h1>
        </div><div>
                <Sigma graph={myGraph} settings={{ drawEdges: true, clone: false }}>
                    <RelativeSize initialSize={15} />
                    <RandomizeNodePositions />
                </Sigma>
            </div></>
    )
};

export default Testvis;