import {useState, useEffect} from "react"

//-------------- SEO ga halaqit qiladi ishlatishdan oldin o'yla ---------------//

const useDomLoaded = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return {domLoaded}
}

export default useDomLoaded
