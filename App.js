/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image,
    ScrollView,
} from 'react-native';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


export default class App extends Component<Props> {
  render() {
      return <ScrollView style={styles.container}>
          <Image style={styles.logo} source={require('./src/assets/img/logo.png')}/>
          <View style={styles.article}>
              <View style={styles.info_auteur}>
                  <Image style={styles.avatar} source={require('./src/assets/img/avatar.png')}/>
                  <View style={styles.info_auteur_col}>
                      <Text style={styles.article_name}>
                          Korben Dallas
                      </Text>
                      <Text style={styles.article_date}>
                          18/12/18
                      </Text>
                      <Text style={styles.article_spot}>
                          Saint Peray
                      </Text>
                  </View>
              </View>
              <View style={styles.article_text_contain}>
                  <Text style={styles.article_title}>
                      Spot au top
                  </Text>
                  <Text style={styles.article_texte}>
                      Ardet nec consumitur laudunt omnes ultima nega lorem ipsum Ardet nec consumitur laudunt omnes
                      ultima
                      nega lorem ipsum,
                      Ardet nec consumitur laudunt omnes ultima nega lorem ipsum Ardet nec consumitur laudunt omnes
                      ultima
                      nega lorem ipsum
                  </Text>
              </View>
              <View style={styles.article_img}>
                  <Image style={styles.article_img_one} source={require('./src/assets/img/falaise.jpg')}/>
                  <Image style={styles.article_img_one} source={require('./src/assets/img/falaise.jpg')}/>
              </View>
              <View style={styles.article_under}>
                  <Text style={styles.article_comment}>
                      Ajouter un commentaire
                  </Text>
                  <Image style={styles.pouce} source={require('./src/assets/img/pouce.png')}/>
              </View>
          </View>
          <View style={styles.marge}>
          </View>
          <View style={styles.article}>
              <View style={styles.info_auteur}>
                  <Image style={styles.avatar} source={require('./src/assets/img/avatar.png')}/>
                  <View style={styles.info_auteur_col}>
                      <Text style={styles.article_name}>
                          Korben Dallas
                      </Text>
                      <Text style={styles.article_date}>
                          18/12/18
                      </Text>
                      <Text style={styles.article_spot}>
                          Saint Peray
                      </Text>
                  </View>
              </View>
              <View style={styles.article_text_contain}>
                  <Text style={styles.article_title}>
                      Spot au top
                  </Text>
                  <Text style={styles.article_texte}>
                      Ardet nec consumitur laudunt omnes ultima nega lorem ipsum Ardet nec consumitur laudunt omnes
                      ultima
                      nega lorem ipsum,
                      Ardet nec consumitur laudunt omnes ultima nega lorem ipsum Ardet nec consumitur laudunt omnes
                      ultima
                      nega lorem ipsum
                  </Text>
              </View>
              <View style={styles.article_img}>
                  <Image style={styles.article_img_one} source={require('./src/assets/img/falaise.jpg')}/>
                  <Image style={styles.article_img_one} source={require('./src/assets/img/falaise.jpg')}/>
              </View>
              <View style={styles.article_under}>
                  <Text style={styles.article_comment}>
                      Ajouter un commentaire
                  </Text>
                  <Image style={styles.pouce} source={require('./src/assets/img/pouce.png')}/>
              </View>
          </View>
      </ScrollView>;
  }
}

const width = '95%';
const left = '2.5%';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
      flex: 1,
      width,
      left,
  },
    logo: {
        width: 50,
        height: 50,
        resizeMode: Image.resizeMode.contain,
    },
    marge: {
      height:30,
    },
    article: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#0101c8',
        flex:1,

    },
    info_auteur: {
        flexDirection: 'row',
        backgroundColor: 'powderblue',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#0101c8',
    },
    avatar: {
        width: 50,
        height: 50,
        resizeMode: Image.resizeMode.contain,
    },

    info_auteur_col: {
        flexDirection: 'column',
        left: 10,
    },
    article_name: {
        fontSize: 10,
    },
    article_date: {
        fontSize: 10,
    },
    article_spot: {
        fontSize: 10,
    },
    article_text_contain: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#0101c8',
    },
    article_title: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'red',
    },
    article_texte: {
        fontSize: 10,
        textAlign: 'justify',
    },
    article_img_one: {
        width: 200,
        height: 200,
        resizeMode: Image.resizeMode.contain,
    },
    article_img: {
        flexDirection: 'row',
    },
    article_under: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: '#0101c8',
    },
    article_comment: {
        fontSize: 10,
        left: 10,

    },
    pouce: {
        width: 15 ,
        height: 15,
        resizeMode: Image.resizeMode.contain,
        right: 10,
    },

});
