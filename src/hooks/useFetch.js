import {useState, useEffect} from 'react'

const useFetch = (targetURL) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    //useStatw hook allows use of reactive value
    //useEffect(function, dependecies)
    //use effect is called on initial render or when a value in dependencies changes since last render
    useEffect(() => {
        //abort controllers can stop fetch request
        const abortController = new AbortController();
        fetch(targetURL, {signal: abortController.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch resource');
                }
                //parses json in object
                return res.json();
            })
            .then((data) => {
                setPending(false);
                setData(data);
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted!');
                }
                else{
                    setError(err.message);
                }
            })
            return () => {
                abortController.abort();
            };
            
    }, [targetURL])
    
    return {data, error};
}

export default useFetch;