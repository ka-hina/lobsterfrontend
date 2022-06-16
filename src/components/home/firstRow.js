import React from "react";

const Content = () => {
    return (
        <div className="page-content-first" id="first-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg" id="first-row-content">
                        <h4 className="text-center">Les sujets dont on parle le plus cette semaine</h4>
                    </div>

                    <div className="col-lg" id="first-row-content">
                        <h4 className="text-center">Avis positifs et avis négatifs</h4>
                    </div>

                    <div className="col-lg" id="first-row-content2" >
                        <div className="span4" id="row-first-content1">
                            <h3 className="text-center"><a href="#">Top 10</a></h3>
                            <p className="text-center">Tweets sur le mot “éolienne”</p>
                            <p className="text-center smallText">20% Increase from Last Week</p>
                        </div>
                        <div className="span4" id="row-first-content2">
                            <h3 className="text-center" v><a href="#">26</a></h3>
                            <p className="text-center">Nouveaux acteurs</p>
                            <p className="text-center smallText">15% Increase from Last Month</p>
                        </div>
                        <div className="span4" id="row-first-content3">
                            <h3 className="text-center"><a href="#">500</a></h3>
                            <p className="text-center">Nouveaux thèmes</p>
                            <p className="text-center smallText">5% Increase from Last Week</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

const FirstRow = () => {
    return (
        <Content />
    );
};

export default FirstRow;
