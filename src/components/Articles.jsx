/* eslint-disable react/no-unescaped-entities */
import mushroomImg from "../assets/titre8champis.webp";
function Articles() {
  return (
    <section>
      <article className="sticky">
        <div className="originesEtVarietesImg"></div>
        <h2>Origines et Variétés</h2>
        <p>
          Les champignons sautés ont une histoire culinaire riche, remontant à
          des siècles dans diverses cultures. De la truffe luxueuse en Europe à
          l'incontournable shiitake en Asie, les variétés de champignons sont
          vastes. Parmi les plus populaires pour la sautée, on trouve les
          champignons de Paris, les portobellos et les pleurotes.
        </p>
      </article>
      <article className="sticky">
        <div className="valeursNutritionnellesImg"></div>
        <h2>Valeurs Nutritionnelles</h2>
        <p>
          Les champignons sont faibles en calories mais riches en nutriments
          essentiels. Ils sont une excellente source de vitamines B,
          essentielles pour le métabolisme et le système nerveux. Ils
          fournissent également des minéraux comme le sélénium, qui joue un rôle
          clé dans le maintien de la santé immunitaire et antioxydante.
        </p>
      </article>
      <article className="sticky">
        <div className="preparationEtAstucesImg"></div>
        <h2>Préparation et Astuces</h2>
        <p>
          Avant de sauter les champignons, il est crucial de les nettoyer
          correctement. Il est recommandé de les brosser doucement ou de les
          essuyer avec un papier absorbant humide, plutôt que de les laver sous
          l'eau, car ils absorbent facilement l'humidité.
          <br />
          <br />
          Une astuce pour une sautée parfaite est d'utiliser une poêle
          suffisamment grande pour que les champignons ne soient pas trop
          serrés. Cela permet à l'eau de s'évaporer rapidement, donnant aux
          champignons une belle texture dorée.
        </p>
      </article>
      <article className="sticky">
        <div className="recetteImg"></div>
        <h2>Recette : Champignons Sautés, Ail et Persil</h2>
        <p>Ingrédients:</p>
        <ul>
          <li> 500 g de champignons de votre choix</li>
          <li>2 gousses d'ail émincées</li>
          <li>2 cuillères à soupe de persil frais haché</li>
          <li>3 cuillères à soupe de beurre ou d'huile d'olive</li>
          <li>Sel et poivre au goût</li>
        </ul>
        <p>Instructions :</p>
        <ol>
          <li> Nettoyez les champignons et coupez-les en tranches égales.</li>
          <li>
            Chauffez le beurre ou l'huile dans une grande poêle à feu
            moyen-élevé.
          </li>
          <li>
            Ajoutez les champignons et faites-les sauter jusqu'à ce qu'ils
            commencent à dorer, environ 5-7 minutes.
          </li>
          <li>
            Ajoutez l'ail et continuez à cuire pendant 1-2 minutes, en veillant
            à ce que l'ail ne brûle pas.
          </li>
          <li>Assaisonnez avec du sel et du poivre.</li>
          <li>Incorporez le persil haché et mélangez bien.</li>
          <li>
            Servez chaud, soit comme accompagnement, soit intégré dans d'autres
            plats comme des pâtes, des risottos ou des salades.
          </li>
        </ol>
      </article>
      <article className="sticky">
        <div className="conseilleAccompagnementImg"></div>
        <h2>Conseils d'Accompagnement</h2>
        <p>
          Les champignons sautés peuvent être accompagnés de nombreux plats. Ils
          se marient parfaitement avec des protéines comme le poulet, le bœuf ou
          le tofu pour un repas équilibré. De plus, ils peuvent être un
          excellent ajout à des plats de pâtes ou être servis sur du pain grillé
          pour un apéritif simple et élégant.
        </p>
      </article>
      <article className="sticky">
        <div className="variationsImg"></div>
        <h2>Variations</h2>
        <p>
          Pour varier, vous pouvez ajouter d'autres herbes comme le thym ou le
          romarin. Des échalotes ou des oignons hachés peuvent également être
          ajoutés pour plus de saveur. Pour une touche crémeuse, incorporez de
          la crème fraîche en fin de cuisson.
        </p>
      </article>
      <article className="sticky">
        <div className="conservationImg"></div>
        <h2>Conservation</h2>
        <p>
          Les champignons sautés se conservent bien au réfrigérateur pendant
          quelques jours. Ils peuvent également être congelés, bien qu'ils
          puissent perdre un peu de leur texture croustillante initiale après
          décongélation.
        </p>
      </article>
      <article className="sticky">
        <div className="conclusionImg"></div>
        <h2>Conclusion</h2>
        <p>
          Les champignons sautés sont un délice simple mais élégant, qui peut
          être apprécié de multiples façons. Avec leur richesse en nutriments et
          leur polyvalence en cuisine, ils constituent une excellente option
          pour des repas sains et savoureux. Que vous les serviez comme plat
          principal ou comme accompagnement, les champignons sautés sont
          toujours un choix gagnant. Bon appétit!
        </p>
      </article>
      <img
        src={mushroomImg}
        alt="un plat de champignons cuisinés"
        className="sticky"
      />
    </section>
  );
}
export default Articles;
