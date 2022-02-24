import React from 'react';


export const Result = ({ result, show, testprop }) => {


	console.log("Result.js: ", result);
	console.log(show);


	return (
		<div className="mt-5 p-3">
			{show && <p className="result-text">Testtömeg index:</p>}
			{show && <p className="result">{result}</p>}
			<p>{testprop}</p>

		</div>
	)
}
