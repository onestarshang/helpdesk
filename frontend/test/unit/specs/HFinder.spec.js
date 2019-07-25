import {getElementFromArray} from '@/utils/HFinder'

describe('FinderTest', function () {
  it('testElementFromArray', function () {
    let exampleArray = [
      {
        key: '1',
        title: '功能导航加载中',
        name: 'test',
        url: '/#/'
      }]
    let findResult = getElementFromArray(exampleArray, 'name', 'test', 'name')
    expect(findResult.title).toEqual('功能导航加载中')
    findResult = getElementFromArray(exampleArray, 'name', 'test_does_not_exist')
    expect(findResult).toEqual(undefined)
  })
  it('testFindInNestedArray', function () {
    let a1 = [
      {
        key: '11',
        title: 'testtitle2',
        name: 'test1',
        url: '/#/'
      }]
    let a2 = [
      {
        name: 'test3',
        children: [{
          name: 'test4'
        }]
      },
      {
        key: '1',
        title: '功能导航加载中',
        name: 'test2',
        url: '/#/',
        children: a1
      }
    ]
    let findResult = getElementFromArray(a2, 'name', 'test1')
    expect(findResult.title).toBe('testtitle2')
  })
})
