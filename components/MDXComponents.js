



const MDXComponents = {
    h1: (props) => <h1 className="text-3xl font-bold text-white" {...props} />,
    h2: (props) => <h2 className="text-2xl font-bold text-white" {...props} />,
    h3: (props) => <h3 className="text-xl font-bold text-white" {...props} />

}


export default MDXComponents 


/**h1: (props) => <h1 className="text-3xl font-bold my-4" {...props} />,
    h2: (props) => <h2 className="text-2xl font-bold my-4" {...props} />,
    h3: (props) => <h3 className="text-xl font-bold my-4" {...props} />,
    ul: (props) => <ul className="" {...props} /> */