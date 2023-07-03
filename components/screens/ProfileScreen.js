import React, { useLayoutEffect, useState } from "react";
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
  const { modalOn, modalOff } = useState(true);

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
    return () => modalOff(true);
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
            backgroundColor: "red",
            flex: 1,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            display: "flex",
          }}>
          <View
            style={{
              display: "flex",
              flex: 1,  
              width: "100%",
              justifyContent: "center",
              alignItem: "center"
            }}>
           
            <View
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                backgroundColor: "purple",
                justifyContent: "flex-start",
                backgroundColor: "pink"
              }}>
              <ScrollView
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  backgroundColor: "skyblue"
                }}>
                <LinearGradient
                  colors={["rgba(0, 0, 0, 0.50)", "black", "black"]} // Array of gradient colors
                  start={{ x: 1, y: 0 }} // Start point (top left)
                  end={{ x: 1, y: 1 }} // End point (bottom left)
                  style={{
                    flex: 1,
                    width: "100%",
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px"
                  }}>
                  <View>
                    <View
                      style={{
                        // flex: ,
                        height: "50vh",
                        width: "100%",
                        margin: "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        zIndex: 2
                        // backgroundColor: "pink"
                      }}>
                      <TouchableOpacity
                        style={{
                          flex: 1,
                          width: "100%",
                          margin: "auto",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative"
                          // zIndex: 2,
                          // backgroundColor: "red"
                        }}
                        onPress={toggleModal}>
                        <Text>Hello World</Text>
                      </TouchableOpacity>
                    </View>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatem porro repellendus numquam ipsa iusto facilis
                      rem dolorem quam molestiae. Ea dignissimos, sint dolorum
                      ab deserunt ratione iste quam explicabo tempora ex nihil
                      rem id quas deleniti voluptatibus! Dolor fugiat aliquam
                      sequi mollitia nobis! Repellat, mollitia. Quaerat porro
                      iure, soluta ducimus blanditiis facere perferendis tempora
                      obcaecati reprehenderit ipsam amet quasi doloribus eius at
                      id odit recusandae aliquid provident. Adipisci officiis,
                      sint itaque molestiae voluptatum repudiandae sit aliquid
                      doloribus numquam delectus! Quaerat aspernatur est
                      asperiores, voluptate molestiae ratione eaque laboriosam
                      aliquid praesentium dolorum quidem deserunt soluta dolore
                      quod, iusto doloribus. Eos a dolorem, id ex iusto
                      voluptatibus commodi odit fugit voluptate nobis illum et
                      voluptas. Id dignissimos exercitationem excepturi est
                      tempora doloribus autem amet quos vitae illo sapiente
                      dolor, blanditiis maiores! Officia, quibusdam, possimus
                      nostrum reiciendis architecto laudantium aspernatur
                      commodi voluptates fuga est facilis soluta libero
                      explicabo amet? Rerum quo blanditiis eveniet tempore nisi
                      eum amet, numquam ratione, pariatur ipsa, qui ipsum velit
                      aliquid et similique id veritatis hic praesentium dolores
                      reprehenderit maiores quam! Voluptate magnam nobis a?
                      Fugiat illo reprehenderit impedit, delectus expedita
                      voluptatibus voluptate nam repellendus optio totam
                      accusantium culpa minus esse maiores rerum facilis! Dolore
                      fuga itaque, aspernatur quo voluptatem tempora adipisci
                      commodi quasi non numquam vero voluptatum labore
                      repudiandae magnam corrupti praesentium earum ab. Eligendi
                      doloribus autem enim magnam ut laborum praesentium maiores
                      quidem voluptas, et perspiciatis placeat quam vitae
                      repellat, eveniet illo cum. Quae velit blanditiis
                      assumenda dolores voluptates ad iure quam, magni nostrum
                      quaerat fugit dolore repellat, hic ab maxime itaque! Ut,
                      eos unde quos aspernatur quas mollitia quaerat atque
                      aliquid quae magnam est consequuntur facere ab rem
                      deserunt laborum minus asperiores veritatis a perspiciatis
                      illum tenetur vitae voluptatem at. Quas ad quam ab iure
                      pariatur eos voluptate numquam maxime earum dicta dolore
                      laudantium incidunt nobis perspiciatis, voluptatem qui
                      doloremque assumenda placeat sunt dolorem iste! Cumque
                      neque aut itaque, aspernatur delectus temporibus aliquam
                      magnam laboriosam perferendis natus consectetur adipisci
                      provident quod quos rem atque voluptate porro nemo
                      assumenda fuga! Placeat alias dolorem ipsa fuga mollitia
                      eaque illum voluptatibus dicta corporis voluptatem,
                      explicabo hic temporibus nobis labore dolore praesentium
                      delectus nam quod ea asperiores architecto nihil commodi
                      reprehenderit. Quaerat consequatur velit sit, voluptas
                      alias iusto excepturi aperiam corrupti, dolorem esse
                      explicabo aliquid! Fugiat quasi at modi aliquid quod
                      expedita ipsa cupiditate qui aliquam. Voluptatem iure
                      accusamus dolores quod at placeat quos in voluptas, rerum
                      voluptate iste possimus, vero magni porro animi
                      reiciendis, sequi voluptatum alias a qui quo omnis
                      numquam? Autem iusto magni quibusdam eligendi, tempora
                      praesentium ex nam facilis sed tempore, fugit nisi modi
                      nulla officiis? Sint quia modi iusto impedit fugit
                      blanditiis vel quam architecto distinctio vitae sit
                      cupiditate, provident nam cum atque officia voluptates
                      saepe voluptate quod omnis soluta? Fugit harum
                      consequuntur iusto dicta ab illo et ex laudantium quos
                      distinctio iste obcaecati repellat quaerat dignissimos
                      fugiat modi libero, corporis cupiditate itaque, quas culpa
                      officia necessitatibus. Maiores error ipsum eligendi harum
                      neque repellat voluptatum odit praesentium illo?
                      Reprehenderit debitis soluta beatae quasi. Necessitatibus
                      doloribus autem laboriosam laudantium molestias qui
                      blanditiis ex exercitationem. Necessitatibus consectetur
                      quibusdam error rem ipsa earum beatae qui cupiditate
                      debitis tempore laboriosam, temporibus distinctio
                      accusantium commodi cumque reiciendis quos nobis incidunt
                      fuga, amet officiis similique. Enim deserunt sed modi
                      autem libero obcaecati, distinctio quis a est ex.
                      Laboriosam dolorum commodi debitis delectus corporis nemo
                      praesentium suscipit vero. Iste odit nulla similique,
                      porro, quo quis dolor esse, impedit quia blanditiis at a
                      hic illo quibusdam quisquam molestias sequi excepturi
                      exercitationem mollitia et magnam error inventore
                      voluptatum veniam. Enim autem quo commodi? Distinctio et
                      voluptas rem reprehenderit accusamus neque dicta
                      necessitatibus repellat deserunt quos ea ipsa delectus
                      doloribus nihil modi deleniti impedit error commodi omnis
                      vel, aperiam possimus? Iusto, minima nobis perspiciatis
                      similique quisquam commodi soluta ut dignissimos harum
                      deleniti sint alias fugiat provident in fugit asperiores
                      magni assumenda amet qui nisi quis velit laboriosam,
                      tenetur dolor. Ea impedit praesentium ipsum, aliquid enim
                      delectus cum mollitia repudiandae. Possimus dicta in
                      aperiam amet? Quo labore velit, cumque dolor doloribus
                      explicabo et soluta, nam ullam iste repellat est delectus
                      nostrum excepturi pariatur sit saepe illo tenetur dolorum
                      quas! Iusto odio earum quas obcaecati? Incidunt earum
                      consectetur ratione facere, praesentium, assumenda, rerum
                      optio adipisci explicabo minus accusantium vero modi
                      provident excepturi exercitationem in dolor alias!
                      Repellat nam, mollitia saepe enim unde similique illo
                      nostrum aliquam, delectus accusantium quisquam blanditiis
                      iure dicta harum adipisci explicabo temporibus, molestiae
                      nesciunt. Alias enim dolorem nesciunt quasi, aliquid modi
                      maxime tempora ut, doloremque dolorum delectus, laborum
                      eius dolor voluptatibus laboriosam! Officiis non nihil
                      quaerat reprehenderit, earum nisi. Optio quam ducimus
                      fuga, maiores voluptatem magnam nam quod sequi, in,
                      exercitationem sunt ea eum quis consequatur animi possimus
                      assumenda a quibusdam dolores expedita fugiat officiis
                      consectetur! Rem laboriosam corrupti provident, quae
                      fugiat veniam cum quidem voluptate, reprehenderit vitae
                      velit et atque, consectetur tenetur at porro quisquam
                      delectus asperiores reiciendis expedita. Assumenda nihil,
                      magnam, recusandae officiis eius impedit quia, minus esse
                      quaerat dolorem maxime aspernatur nemo aut voluptatum ab
                      porro ipsum beatae enim dolores laudantium quod! Aut,
                      fugiat architecto, quibusdam quidem dicta quasi maxime
                      corrupti similique asperiores obcaecati, ratione placeat
                      perspiciatis debitis dolorum beatae? Ipsa sunt laborum
                      ipsam eaque dignissimos amet, assumenda repudiandae
                      possimus saepe ullam numquam ducimus atque, nulla
                      cupiditate dolorem? Commodi, quidem ipsa sint sit incidunt
                      facere assumenda. Sit in est repellat nam perferendis
                      repellendus ea expedita ut doloribus qui aliquid, optio
                      dolorum velit, reiciendis ab minus accusamus voluptate
                      dignissimos iure mollitia officiis, temporibus facere
                      officia. Sint illo iure quis neque nisi assumenda placeat
                      similique velit inventore ducimus unde fugit animi
                      incidunt suscipit deleniti, cumque perspiciatis autem
                      doloremque, mollitia aspernatur alias quisquam nam. Beatae
                      reiciendis assumenda, perferendis quisquam, similique
                      tempora in ut laborum asperiores error animi doloremque
                      consequatur dolor expedita ea atque, ipsum omnis hic sit
                      dolores eligendi porro harum. Veniam esse eos assumenda.
                      Magni maiores recusandae vitae ducimus? Qui possimus nam
                      dolore debitis, consequuntur quia illum, voluptatibus
                      totam sapiente, animi nulla repellendus. Vitae, tenetur
                      asperiores. Vitae dolores veniam, at maxime, possimus, vel
                      quisquam ab corrupti recusandae eveniet perspiciatis saepe
                      ullam nobis!
                    </Text>
                  </View>
                </LinearGradient>
              </ScrollView>
            </View>
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
  },
  modalOnStyling: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    display: "flex"
  },
  modalOffStyling: {
    display: "none"
  }
});
