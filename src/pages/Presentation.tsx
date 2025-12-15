function Presentation() {
    const nom = 'Jean Michel';
    const age = 426;
    const bool = true;
    const stringReloue = `String avec <> et {} en texte`;
    const jsx = <span>Hello World !</span>
    const maClasse = "toto";
    const image = 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif';
    const imageObject = {
        source: 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif',
        titre: 'Galaxy Cat',
        description: 'Un chat à lunettes dans la galaxy',
    }
    const fruits = ['Clémentine', 'Orange', 'Kaki', 'Kiwi'];
    const jsxsssss = [
        <span>A</span>,
        <span>B</span>,
        <span>C</span>,
        <span>D</span>,
    ]

    function AgeStatus() {
        if(!age) {
            return <p>Age non renseigné</p>
        }
        if(age < 0) {
            return <p>Age invalide</p>
        }
        if(age > 150) {
            return <p>Vous êtes peu vivant </p>
        }
        return <p>Age valide : {age}</p>
    }

    return (
        <>
            <h1>Présentation du JSX</h1>

            <section>
                <h2>Interpolation</h2>

                <p>C'est le fait d'interpréter du JS dans le template.</p>
                <ul>
                    <li>1 + 3 = {1 + 3}</li>
                    <li>Bonjour {nom} - {age} ans</li>
                    <li>Boolean : {bool}</li>
                    <li>{stringReloue}</li>
                    <li>JSX : {jsx}</li>
                </ul>
            </section>
            <section>
                <h2>Attribute Binding</h2>
                <p className={maClasse}>J'ai la classe "toto"</p>
                <p className="toto">J'ai la classe "toto"</p>
                <img src={image} alt=""/>

                <figure>
                    <img src={imageObject.source} alt={imageObject.description}/>
                    <figcaption>{imageObject.titre}</figcaption>
                </figure>
            </section>
            <section>
                <h2>Affichage Conditionnel</h2>
                <article>
                    <h3>Ternaire: si ... alors, sinon...</h3>
                    <p>{
                        // WTF What ?  True : False
                        bool ? <span>c'est vrai !</span> : <span>c'est faux !</span>
                    }</p>
                    <p>Vous êtes : {age > 18 ? "majeur" : "mineur"}</p>
                </article>
                <article>
                    <h3>Si true alors...</h3>
                    {bool? <p>Paragraphe secret</p> : null}
                    {bool && <p>Paragraphe secret</p>}

                    <h3>Si false, alors...</h3>
                    {bool || <p>Bool est false !</p> }

                    <h3>Cas particulier :</h3>
                    {/* Dans ce cas : soit l'age affiché, soit le paragraphe */}
                    {age ?? <p>Age non renseigné</p>}
                    {
                        // @ts-expect-error all ok
                    (!age || age !== 0) && <span>Age non renseigné</span>
                    }

                </article>
                <article>
                    <h3>Les composants</h3>

                    {AgeStatus()}
                    <AgeStatus />
                </article>



            </section>
            <section>
                <h2>Liste</h2>
                {jsxsssss}
                <ul>
                    {fruits.map((fruit) => <li key={"l1-" + fruit}>{fruit}</li>)}
                    {fruits.map((fruit) => <li key={"l2-" + fruit}>{fruit}</li>)}
                </ul>
            </section>
        </>
    )
}

export default Presentation;