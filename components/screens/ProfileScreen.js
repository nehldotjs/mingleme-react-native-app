import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const navigation = useNavigation();
  const data = [
    {
      profilePic:
        "https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      id: "1",
      firstName: "nelson",
      lastName: "osuya",
      sex: "male",
      status: "single",
      month: "sept",
      day: "24",
      year: "2023",
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem libero nihil, in saepe velitexcepturi, aperiam ut vitae minima molestias quaerat enim tempora nostrum iure quam sunt officiis corporis? "
    }
  ];
  const toggleModal = () => {
    console.log("modal check");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          display: "flex",
          backgroundColor: "skyblue"
        }}>
        {/* IMAGE SECTION */}
        <View
          style={{
            flex: 1,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            display: "flex"
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItem: "center",
              width: "100%"
            }}>
            <Image
              source={require("../../assets/backgroundImg.jpg")}
              style={{
                height: "100%",
                width: "100%",
                margin: "auto",
                display: "flex"
              }}
              resizemode="cover"
            />
          </View>
        </View>
        {/* IMAGE SECTION */}
        {/* TOGGLE BUTTON SECTION */}
        <View
          style={{
            // backgroundColor: "red",
            flex: 1,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            display: "flex"
          }}>
          <View
            style={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              backgroundColor: "blue"
            }}>
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.20)", "black"]} // Array of gradient colors
              start={{ x: 1, y: 0 }} // Start point (top left)
              end={{ x: 1, y: 1 }} // End point (bottom left)
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "orange",
                position: "relative",
                justifyContent: "center",
                alignItems: "center"
              }}>
              <ScrollView>
                <View>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      height: "100%",
                      width: "100%",
                      margin: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      zIndex: 2
                      // backgroundColor: "red"
                    }}
                    onPress={toggleModal}>
                    <Text>Hello World</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 1,
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    backgroundColor: "red"
                  }}>
                  <Text
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      // alignItems: "flex-start",
                      alignItems: "center",
                      color: "white"
                    }}>
                    Modal Check Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Voluptatem facilis corporis excepturi
                    quis? Labore illo nisi porro aliquid aut quas. Dicta nisi
                    natus dolores hic tempore vitae dolore consectetur quod illo
                    doloremque rerum, eos placeat reprehenderit accusamus ab
                    magnam. Repellat at earum nam autem adipisci cum, et dicta
                    alias assumenda excepturi doloremque sint harum obcaecati
                    laborum est dolore, dolores, dignissimos pariatur expedita.
                    Suscipit repellendus iure rem quaerat natus? Tempore quod
                    eos repellendus, praesentium saepe tempora adipisci
                    obcaecati qui culpa, nesciunt esse magni dolorum, blanditiis
                    velit! Quo alias tempore reprehenderit quia. Molestias
                    praesentium neque placeat accusamus suscipit veniam
                    excepturi minima nesciunt? Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Nobis odit labore, rerum omnis
                    ullam corrupti amet odio molestiae maxime in magni, ex
                    tenetur voluptate sequi blanditiis officia quos totam saepe
                    ipsum iste. Officia natus perferendis veritatis voluptatem
                    vitae? Mollitia modi temporibus voluptate ipsa ducimus? Odio
                    vel soluta excepturi magni eum odit iure repellendus eius
                    nisi, incidunt, reiciendis iste cumque dolore deserunt quo
                    animi, nam sit voluptas iusto impedit fugit voluptatum
                    repellat commodi molestiae. Voluptatum quidem saepe facilis
                    nisi. Minus amet vero quod enim aperiam, alias a consequatur
                    iste quidem laudantium iure, quos autem sequi sint cum
                    necessitatibus nisi quisquam sed illum soluta pariatur odit!
                    Voluptatem repudiandae deserunt asperiores debitis dolorem
                    rem aut neque laborum, ipsam, quos a corporis assumenda
                    blanditiis eius sint. Aspernatur et, iste consequuntur eaque
                    quam numquam modi beatae ad dicta laudantium nobis, delectus
                    exercitationem ipsum cumque similique, voluptate laborum
                    aut. Commodi officiis illum ullam asperiores provident,
                    aspernatur voluptatum voluptates praesentium laborum.
                    Laborum temporibus inventore praesentium omnis natus harum
                    nostrum id quia eius fuga nam nihil neque sunt, quas placeat
                    blanditiis fugit sit deleniti voluptatem soluta eveniet?
                    Modi, nam. Error, unde. Quasi dolorem tenetur assumenda
                    consequuntur adipisci, doloremque alias molestias distinctio
                    delectus possimus! Pariatur explicabo a fugiat, accusamus
                    adipisci commodi repudiandae veniam eius incidunt nam,
                    voluptate deleniti magnam est asperiores sit autem
                    cupiditate debitis. Eius similique fuga sint possimus!
                    Soluta iure iusto numquam quasi debitis animi. Sit suscipit,
                    repellendus ex in quisquam aliquam debitis omnis excepturi
                    vitae inventore molestias impedit alias corporis magni minus
                    placeat quod et rerum laudantium vel nisi non reiciendis
                    maxime! Nemo, soluta! Optio natus unde quis veniam ipsum
                    nisi sequi ut quos nihil esse aliquid ducimus, sint
                    provident ex, eos ea animi mollitia eaque accusamus totam
                    dicta minima. Itaque fuga nulla nostrum. Tempore enim maxime
                    saepe culpa! Et molestias consequuntur cupiditate iusto
                    tempora quas aperiam error, voluptatum eum aut explicabo,
                    minima iste deserunt, vero corrupti? Dolores magni ipsum
                    numquam itaque sed voluptas deleniti atque ratione quaerat
                    veritatis eveniet unde incidunt iure maiores, aliquid ad
                    quas? Dolorum iste vero corrupti! Impedit libero reiciendis
                    aliquam officia dolorem, saepe earum enim, dignissimos
                    inventore maiores, in ipsum cumque eius iste laboriosam unde
                    eligendi praesentium rerum distinctio omnis. Quisquam
                    eveniet odit doloremque quam repellendus dolorem
                    consequuntur exercitationem, eius, vel eos modi porro
                    placeat hic excepturi totam quasi sunt illo ex? Aut
                    cupiditate expedita magni praesentium culpa nisi at
                    exercitationem, modi sint id inventore quia est aliquid esse
                    unde provident voluptatem voluptas vel voluptatibus iure
                    dolorum labore consequuntur laboriosam incidunt. Vero id
                    consectetur, possimus quae nobis tenetur impedit ea,
                    assumenda a beatae error vitae. Libero sequi earum maiores
                    quaerat quo quasi a ipsa accusamus rerum mollitia expedita
                    aliquid assumenda sint facere laboriosam laudantium
                    doloribus labore corrupti nemo, modi sed quam excepturi
                    unde. Earum velit repellendus consequatur tempora, saepe
                    eaque eius iusto qui doloremque quae iure excepturi nobis
                    consectetur delectus at illo dolores, reiciendis praesentium
                    maiores quasi sunt mollitia! Consequuntur esse molestias
                    officiis corrupti nemo hic aut fuga assumenda veritatis quod
                    illo odio, autem ipsam minima? Amet perspiciatis eum tenetur
                    dicta consequuntur officiis, cumque laudantium, earum
                    laborum accusamus nulla quidem nam! Tempore quidem tempora
                    repellendus facere minima enim quia mollitia amet. Dolorem
                    illo facere aspernatur incidunt nisi. Id omnis iusto rem.
                    Magni cupiditate corporis ad quaerat, totam maiores.
                    Praesentium modi vel dolor voluptatem quibusdam pariatur
                    deleniti, blanditiis eligendi vitae veritatis quidem sequi
                    aliquid mollitia, odio eum ea maiores id et asperiores quia!
                    Autem nam rerum quibusdam. Ea rerum error, ad unde quibusdam
                    iste aspernatur temporibus, velit rem voluptates esse
                    veritatis officiis, a impedit sint possimus quod quos aut
                    quas. Eos quis quas, totam cum architecto animi illum.
                    Perspiciatis tempora quos fuga fugiat nulla soluta repellat.
                    Tempore odio voluptatem ipsam sapiente, perspiciatis totam
                    sed eos inventore sunt officiis debitis molestias ex
                    deserunt tempora tenetur cumque culpa cum quae? Asperiores
                    assumenda perspiciatis dignissimos natus eveniet, eligendi
                    voluptatum, doloremque repellat sunt iure modi. Dolore
                    provident animi distinctio quia totam aspernatur, quidem
                    porro laudantium sed, cumque aliquid perferendis commodi
                    dignissimos, error nesciunt eos voluptates ullam repudiandae
                    possimus blanditiis! Ipsa nihil alias, rerum qui inventore
                    nesciunt laboriosam illo ex, eius harum animi incidunt est
                    perferendis quis ab doloremque, cumque tempore quibusdam
                    amet iste corrupti consequuntur beatae earum quos? Tenetur
                    aut nesciunt consectetur tempore, officia adipisci, odio
                    perspiciatis sint quam facilis ex. Dignissimos commodi rerum
                    soluta consequuntur eius voluptate officia libero natus
                    explicabo. Quia eveniet adipisci nesciunt reprehenderit
                    assumenda aperiam voluptate ducimus? Ullam illum temporibus
                    inventore vitae nam ut commodi veniam dolor pariatur
                    dignissimos tenetur odit cumque nobis quos voluptatem
                    voluptates reprehenderit, nostrum eos corporis ipsum
                    deserunt neque dicta! Recusandae nulla magni animi quaerat
                    quasi ipsa accusantium, culpa magnam. Enim totam porro,
                    inventore doloremque aperiam ex sequi dolores esse, iusto in
                    amet. Vero suscipit, rem repellat natus modi iusto sequi cum
                    veniam perspiciatis expedita maiores in at eos, consectetur
                    quam voluptas? Eos deleniti placeat iste laboriosam repellat
                    modi voluptates impedit voluptatem labore enim iure ipsa
                    consectetur, consequatur error porro perspiciatis obcaecati
                    animi earum, harum doloribus. Autem adipisci rem laudantium
                    magni nemo. Dolores nihil quam earum voluptates eum facilis,
                    quis hic laudantium in ipsam accusantium et ipsa nemo id
                    inventore quod, unde eveniet autem deleniti nesciunt sit ut
                    saepe eligendi non! Deleniti sit corrupti voluptates error
                    cumque, dignissimos inventore laborum ex harum sapiente,
                    eius ratione molestiae asperiores a illo exercitationem quas
                    eum adipisci obcaecati recusandae dicta id itaque?
                    Reprehenderit aliquid impedit molestiae saepe dolor dolore
                    veritatis molestias soluta harum! Hic in vel necessitatibus
                    repellendus optio eius minus facilis laborum eveniet nulla
                    porro quo ullam quae ipsum corrupti quia nam quasi, nostrum
                    maiores voluptas. Accusamus beatae temporibus repellat,
                    tempora id quisquam sapiente tempore earum aperiam nisi eos
                    totam placeat, quos impedit ex facilis? Fugiat beatae
                    commodi vel cupiditate saepe cumque voluptatem vitae sint
                    eligendi, maiores quos unde officiis, dolorem temporibus
                    magni dolores culpa. Mollitia, aspernatur eos repudiandae
                    magnam aliquam sequi maxime quis in doloremque similique
                    qui, harum dicta corporis architecto minima dolore nobis
                    repellendus temporibus porro placeat cumque quo, assumenda
                    illum. Ipsam rem, quos debitis nostrum ea alias itaque quam
                    ad temporibus eveniet culpa illum sapiente vel consectetur
                    et, hic praesentium esse, omnis est! Iure tenetur aut
                    temporibus delectus doloribus itaque ipsum reiciendis eos?
                    Consequatur blanditiis nulla sint deserunt voluptas?
                    Dignissimos beatae eum doloribus aliquam soluta a doloremque
                    suscipit tempore rem commodi facilis cupiditate quas,
                    deserunt exercitationem earum voluptatum vel repudiandae
                    magni? Nemo enim qui dolores tempore possimus quasi, dolore
                    quia expedita, corporis explicabo sint dolor modi eos
                    dolorem distinctio nam est, fuga nisi dicta magni!
                    Reprehenderit neque fugiat molestias? Consectetur fugit
                    placeat dolore debitis ratione, soluta reprehenderit illo
                    non hic doloribus autem velit ipsa molestiae eaque nihil!
                    Eveniet doloribus repellat, aliquam esse, ab quisquam et
                    vitae placeat consectetur voluptatibus quae ducimus odit
                    laboriosam commodi accusamus at iste cupiditate voluptatum.
                    Quaerat culpa deleniti nulla aperiam architecto soluta non
                    libero cumque voluptatibus! Alias, molestias laboriosam quis
                    voluptas nihil quos laudantium culpa saepe voluptate amet
                    reiciendis deserunt eius enim error at sed molestiae maxime
                    nostrum dolorem cum. Sint labore repellendus doloremque nisi
                    consequatur quod ullam deleniti ut necessitatibus id, veniam
                    libero voluptate adipisci? Expedita, aspernatur nam,
                    adipisci nostrum minima aliquam ab numquam, mollitia minus
                    architecto harum! Quas qui soluta aspernatur expedita
                    laborum quidem doloremque incidunt aliquam necessitatibus
                    enim ratione dolor illo, repellendus optio repellat beatae
                    nobis quaerat obcaecati dignissimos iusto adipisci quo sit
                    quis veritatis! At, laborum provident voluptatum eos atque
                    quia, beatae maxime totam magnam quos blanditiis sequi ab
                    incidunt. Consectetur ullam architecto saepe, dignissimos
                    reprehenderit ducimus, atque, nam modi quod veniam repellat
                    nesciunt? Molestias iusto velit sapiente nihil eaque odit
                    perferendis fugit non distinctio pariatur, libero, deserunt
                    eveniet alias tempore deleniti ad labore tempora et modi
                    provident aliquid suscipit quo? Fugit maiores expedita vero
                    distinctio sit quas doloremque repellendus soluta, ad
                    aliquid sequi totam voluptas dolor labore nam sed, facilis
                    cumque et suscipit nemo! Similique provident cumque
                    repudiandae libero, aut asperiores hic distinctio non
                    dignissimos dicta minus odit consequuntur nesciunt et
                    nostrum autem ut ab earum ex modi quod neque laudantium
                    impedit corrupti? Ducimus omnis at iusto dolores maxime
                    blanditiis officia sequi nisi, dignissimos dolorem rem
                    accusantium, sunt, quam consequuntur unde ex necessitatibus
                    aliquam reprehenderit deleniti atque deserunt ad labore
                    eius! Expedita, id eveniet? Esse consequatur nihil minus nam
                    quia? Fugiat placeat pariatur at velit, esse quaerat
                    blanditiis recusandae quo cum eaque enim qui maxime ut
                    inventore ea neque rem vero exercitationem minima ipsa
                    excepturi, et odio quasi. Ullam, veritatis. A dolorum
                    officia mollitia illum magnam quaerat atque nostrum. Tempora
                    sed voluptatem recusandae quam explicabo, enim, consequatur
                    dignissimos reprehenderit iste officiis, at vero mollitia
                    quia harum consectetur amet repellendus laborum ipsam
                    voluptate soluta. Unde debitis esse tempore earum hic
                    quaerat dolor animi veniam quis. Assumenda deserunt
                    adipisci, voluptatibus molestiae inventore, impedit ullam
                    sit vel magni facilis illo quae, sapiente at perferendis
                    ducimus ad totam. A placeat sint eos dolor dignissimos fugit
                    qui rem nesciunt modi, eligendi odio soluta harum quasi
                    voluptates cum similique, sit voluptatum dolore earum quas
                    sunt at quaerat provident voluptate. Ducimus, voluptatem
                    modi? Deserunt modi corrupti nulla veniam non voluptatum
                    voluptas ex perspiciatis dicta? Recusandae earum
                    exercitationem ipsa temporibus nam id ullam officia nemo
                    neque nisi. Similique quia unde nisi cum. Quos cumque
                    placeat ipsa id quas explicabo minus, nesciunt voluptatibus
                    impedit recusandae! Veritatis, placeat, enim temporibus
                    laborum voluptatibus modi officia aliquam eligendi quia odit
                    obcaecati iste atque inventore praesentium molestias? Amet
                    dignissimos consectetur dolorem expedita distinctio harum
                    culpa eius vitae facilis similique facere dolor, cupiditate
                    odio quis veniam! Nam doloribus aliquid ipsam enim vitae vel
                    similique quae? At consectetur deleniti laborum omnis
                    reiciendis sit adipisci ullam doloremque fugiat rem dicta
                    recusandae velit ut, et nulla dolore consequuntur,
                    repellendus voluptates dolor tempora libero quam sunt. Nam,
                    explicabo. Optio ipsum fugiat eaque impedit laborum quam
                    voluptatibus dolorem qui obcaecati iste velit facere
                    explicabo magnam eligendi illo adipisci fugit in, voluptate
                    eum facilis! Saepe repudiandae amet voluptates aspernatur in
                    quas mollitia aliquid ducimus temporibus, deserunt quos
                    consequuntur ipsa eum, ipsam quidem, consectetur eveniet
                    incidunt! Voluptatum beatae, vel nulla cumque quod tempore
                    consequuntur deserunt qui cum assumenda voluptates dolores
                    eaque quo magnam? Ipsa modi commodi voluptate optio tempora
                    saepe quae non nostrum dicta exercitationem sequi omnis
                    adipisci nobis nisi, fuga voluptatem, expedita culpa
                    corrupti deleniti molestiae. Delectus, iste id maxime
                    repudiandae nostrum quia tenetur mollitia dignissimos
                    inventore culpa neque, possimus rem velit amet alias quos
                    quisquam aspernatur ducimus cum fuga a commodi voluptates
                    reiciendis! Provident eaque temporibus hic. Quod delectus
                    voluptates dolores, consectetur error quisquam aspernatur
                    laborum deleniti placeat nobis reiciendis est itaque atque
                    asperiores at aperiam exercitationem cumque tempora soluta
                    numquam, quibusdam quia! Ducimus, possimus in! Eligendi
                    harum quae, magni, beatae voluptas ducimus voluptatem enim
                    quibusdam officia eius delectus rerum voluptatibus unde
                    totam voluptates perferendis id eveniet labore vitae
                    veritatis exercitationem quo ad quidem. Eaque commodi
                    aperiam quam cupiditate doloribus? Facere, quae sint
                    doloribus quia quas cum corporis mollitia alias nobis
                    reiciendis, ut aperiam ab tenetur veritatis totam ratione
                    culpa iusto, ad qui inventore eaque! Alias doloremque culpa,
                    ut recusandae reprehenderit delectus animi ea molestias
                    error nisi cumque dolorem qui quidem dolores odit.
                    Voluptates quibusdam commodi ducimus natus maiores aliquid
                    sit quae, repellendus voluptatem beatae consectetur aliquam
                    provident nam eveniet, similique excepturi nostrum mollitia.
                    Mollitia, voluptate labore. Eligendi quasi porro corporis,
                    ratione sapiente similique quos esse quas dolores enim optio
                    nemo rem, ab non exercitationem maiores possimus
                    necessitatibus repellendus? Dolorum inventore dolores,
                    itaque modi ratione aperiam perspiciatis quibusdam et
                    officia veritatis illum distinctio totam cum enim assumenda
                    dolore? Corporis earum suscipit illo alias quod voluptate
                    dolore qui exercitationem inventore, quos nostrum cum vitae
                    sed quasi. Voluptatem, harum delectus? Et tempore, quibusdam
                    accusamus nam dolorum placeat dolor enim quasi ipsa vitae
                    aspernatur omnis nihil sequi voluptate a aliquid repellat
                    error impedit? Id, hic deleniti, exercitationem molestiae
                    dolores officiis soluta aliquam itaque sit optio expedita
                    distinctio tempora. Unde maiores odio sunt corrupti fugit.
                    Eaque maiores corrupti non quod ullam, assumenda
                    voluptatibus aspernatur incidunt in vero quam consequatur
                    perferendis aperiam voluptatum laudantium, voluptas officia
                    dignissimos, at sapiente neque debitis? Ratione, ex. Cumque
                    incidunt voluptatum ipsam accusamus dolores, voluptates
                    corrupti. Rem itaque nesciunt harum error tenetur recusandae
                    tempora magnam quaerat commodi? Possimus non perferendis,
                    necessitatibus aspernatur quasi nobis autem hic cumque saepe
                    expedita dolore repudiandae explicabo! Labore doloremque,
                    assumenda culpa ratione quos officiis dolore aperiam earum
                    incidunt maiores architecto saepe quo quidem, maxime
                    consequuntur placeat in voluptatum, error natus blanditiis
                    iusto autem. Delectus, ipsum! Voluptatem assumenda ullam
                    consequuntur. Deserunt expedita accusantium atque officia
                    aliquid dolorum, earum saepe temporibus unde tempora quis
                    nesciunt hic laudantium quisquam eaque voluptatum explicabo
                    excepturi ullam sit! Aliquid tempora consequuntur accusamus
                    doloribus? Error ad velit cupiditate debitis, excepturi sint
                    inventore at autem veritatis! Qui ratione iste ea repellat
                    non magni, nobis maiores, nisi, corporis accusamus
                    laboriosam dolor inventore soluta dolorem architecto sed.
                    Recusandae cumque reprehenderit suscipit iusto velit
                    molestiae quisquam soluta ab, ratione at. Doloribus, dicta
                    non. Reprehenderit aliquid vitae temporibus, perspiciatis
                    quam vero fugit quo soluta corporis nemo! Veritatis nesciunt
                    reiciendis eum nemo est fugit vel praesentium ab molestiae
                    aut quos quisquam quibusdam quae possimus excepturi hic
                    nostrum nihil, perferendis velit ea iusto necessitatibus
                    facere? Perspiciatis voluptatibus perferendis amet numquam
                    veritatis cupiditate, eligendi minus odit exercitationem
                    ipsum ad labore illum quisquam id eos pariatur esse quis
                    sed. Adipisci, accusantium cupiditate autem perspiciatis
                    corrupti vitae odit? Laboriosam odit suscipit eveniet
                    aliquam amet, molestiae labore assumenda animi voluptatem
                    eos vel atque neque, dolorum expedita soluta ipsa quam
                    placeat delectus earum sapiente harum minima sint quas.
                    Fugiat, nisi ullam velit optio adipisci deserunt! Itaque qui
                    velit repellat laborum, esse tempore nihil consequuntur
                    beatae debitis eius. Voluptatibus minus facilis laborum
                    doloremque accusantium expedita quo dolores, modi corporis
                    aliquam architecto sit iusto fuga impedit tenetur, aut at
                    incidunt aperiam ullam. Nam cumque fuga odio unde. Eius nam
                    consequatur nulla ullam deleniti, quia iste ducimus libero
                    architecto ipsum! Iste rem minima commodi repellat magni
                    esse fugiat ex cumque alias, ratione sequi sit atque
                    nesciunt id asperiores cum voluptate aspernatur veritatis.
                    Ratione in autem earum quasi molestias fugiat consequatur,
                    ullam quae labore eveniet aliquam iusto et temporibus quidem
                    quis quisquam natus laborum facere quas accusamus quam nobis
                    doloremque alias blanditiis. Numquam nobis, voluptas maiores
                    asperiores alias fugit hic quidem porro natus architecto
                    ratione praesentium quisquam aliquam eveniet pariatur,
                    laboriosam recusandae nostrum iste expedita. Totam hic
                    consequatur aperiam! Mollitia facilis, voluptate magnam
                    veritatis cum, maiores impedit aperiam, quo error ipsa
                    laborum at modi ut eos repellat explicabo sequi sunt fuga
                    dicta? Cumque fuga animi eaque sint eligendi culpa neque
                    nisi illum consequatur ratione quis inventore quibusdam
                    mollitia consectetur debitis, aperiam nostrum recusandae
                    delectus eum expedita fugit quaerat. Minima sunt hic in
                    molestias magni laudantium delectus, alias quae? Animi
                    ducimus non assumenda itaque sequi. Sequi quibusdam quisquam
                    quae nulla culpa odit ipsum, facere aliquid voluptates
                    necessitatibus accusantium dolorum deleniti magni nemo
                    aperiam qui ipsam ipsa? Illum, officiis. Neque perspiciatis
                    ducimus aperiam minima doloremque. Pariatur, sint quod
                    impedit deserunt ipsam aliquid ab quidem delectus,
                    perferendis tempora, laudantium mollitia maiores. Inventore
                    ipsa voluptatum sed placeat reiciendis fugiat commodi quasi
                    quos repudiandae eius iste veritatis vel quae, nesciunt,
                    neque doloremque quidem modi consectetur fuga, optio
                    asperiores corrupti esse? Architecto excepturi id fugiat
                    harum ad voluptatum? Itaque, iure? Incidunt ipsa quaerat
                    possimus enim voluptas accusantium quisquam voluptate error
                    aut, porro atque nobis cupiditate modi fugit. Iusto, ad
                    itaque ipsum quas et aut rem suscipit exercitationem officia
                    saepe numquam, doloremque corporis architecto laborum,
                    expedita eos in. Porro at animi quam aperiam aspernatur
                    neque reprehenderit distinctio nam? Dicta aperiam
                    repudiandae fugit minima, labore error explicabo veniam
                    voluptate quod est dolore modi itaque esse! Doloribus quos
                    enim vel laborum molestiae qui itaque magni consequuntur
                    soluta. Accusantium autem molestias voluptatem in alias
                    adipisci culpa ad nemo id nulla ut deserunt rem porro
                    provident inventore, natus expedita dicta suscipit, rerum
                    velit quae. Quisquam ex deleniti odit vitae quos inventore
                    eius nihil illum vel laborum architecto, sunt sint a
                    cupiditate placeat non quaerat rem assumenda doloribus odio?
                    Magnam, quis! Numquam quae officiis distinctio eos eius ad,
                    beatae odit impedit explicabo error alias non, similique
                    quod! Nihil saepe voluptate, dolores quis vitae reiciendis
                    consequatur? Laborum, vitae beatae asperiores ratione a
                    mollitia, cum accusamus quaerat dignissimos neque aut
                    aspernatur ad. Dignissimos, vero eius! Veniam rerum
                    doloremque beatae consectetur cupiditate! Quibusdam soluta
                    voluptates quasi quam aspernatur, voluptate odit a ratione
                    dicta commodi! Autem voluptatum at nisi aut eligendi saepe
                    perspiciatis soluta animi quos similique, enim assumenda
                    aliquam dolore modi recusandae, ipsam eaque rem voluptas vel
                    laboriosam consequatur? Hic minus animi nam voluptatum ipsa
                    earum quam, quod quos, possimus molestias odio ipsum totam
                    quo, sunt voluptatem! Quis suscipit omnis quaerat amet
                    nesciunt deleniti voluptatum quas minima vel non vero, magni
                    assumenda numquam molestias recusandae possimus sapiente
                    officiis, beatae laudantium et? Eos sit quidem aspernatur
                    explicabo ratione, libero animi asperiores molestias
                    eligendi ex aperiam modi, eum ea nam vero alias quos!
                    Voluptates id, cupiditate iste aliquam minima iusto minus
                    praesentium ad cumque a, architecto, provident recusandae
                    aliquid et vitae maiores. Harum assumenda blanditiis officia
                    illum esse. Cupiditate suscipit consequuntur architecto? Id
                    consequuntur accusantium voluptatem. Debitis ullam commodi
                    inventore doloremque nobis libero nesciunt magnam architecto
                    quas incidunt eos ratione, dolorum vitae quis amet
                    accusantium tenetur deserunt optio cupiditate blanditiis
                    fuga dolores perspiciatis esse. Atque exercitationem maiores
                    voluptate provident inventore veritatis, beatae blanditiis
                    culpa? Eligendi, dicta. Alias voluptatibus perferendis rem
                    consequuntur cumque esse necessitatibus, officia nobis ea
                    recusandae quod sint impedit placeat minima sed dignissimos
                    reiciendis. Dicta cumque voluptatum quae error laboriosam
                    incidunt debitis repellat earum illum suscipit. Quas
                    voluptatum recusandae ab esse quasi atque tempora ad
                    quibusdam. Dolor commodi fugit quam tempore ab animi minus
                    eius et quos doloremque maxime adipisci, quas quo corporis.
                    Ducimus, quasi atque consequatur, libero iste quaerat qui
                    perferendis earum veritatis expedita, perspiciatis
                    architecto! Numquam mollitia commodi cupiditate sunt laborum
                    eum saepe aut expedita, quos dignissimos libero, quia iusto
                    dolore, obcaecati adipisci repellendus ad nemo magnam
                    molestiae beatae quae debitis? Tempore dicta facere
                    assumenda quis recusandae, voluptatibus deleniti quasi.
                    Architecto nam nisi neque sit aperiam adipisci ducimus
                    maxime recusandae quisquam amet. Asperiores quos laborum
                    voluptatum, quibusdam, soluta, sequi delectus adipisci
                    placeat iste culpa voluptas iusto qui illum maxime veniam
                    quasi aliquid porro mollitia sunt rem amet saepe vitae?
                    Aliquid delectus, quasi, numquam iure sint impedit facere,
                    autem quas similique in iusto corrupti? Eligendi animi
                    accusantium laborum sunt dolorem.
                  </Text>
                </View>{" "}
              </ScrollView>
            </LinearGradient>
          </View>
        </View>

        {/* TOGGLE BUTTON SECTION */}

        <View
          style={{
            backgroundColor: "orange",
            flex: "1",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            display: "none"
          }}>
          <Text>Account Detail</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "spac-evenly",
    backgroundColor: "purple",
    alignItem: "center",
    height: "100%",
    margin: "auto",
    width: "100%"
  }
});
