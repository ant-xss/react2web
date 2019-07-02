import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux'
import AutoFlatList from 'react-native-autoflatlist'
@connect()
class lists extends Component {
  static navigationOptions = {
    title: 'lists',
  }
  loadData(page) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push(`页数${page},数据源${i}`)
            }

            //模拟没有更多数据
            //data.splice(5, 3)

            resolve(data)
        }, 1000)
        })
    }

    renderItem(item, index) {
        return <Text style={{fontSize: 28, padding: 40, backgroundColor: 'white', marginTop: 1}}>{item}</Text>
    }
  render() {
    return (
      <AutoFlatList
             style={{flex: 1,backgroundColor: '#eee'}}
             netWork={(page) => this.loadData(page)}
             loadMoreEnable={true}
             renderItem={({item, index}) => this.renderItem(item, index)}
         />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default lists
