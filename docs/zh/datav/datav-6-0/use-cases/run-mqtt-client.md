# 运行MQTT客户端 %{#92042}% 

MQTT是基于TCP/IP协议栈构建的异步通信消息协议，是一种轻量级的发布/订阅信息传输协议。本文档为您介绍通过阿里云物联网平台提供的设备端Java SDK，运行MQTT客户端的方法。

## 前提条件

* 下载Eclipse软件，并配置好Java环境。
* 此Demo为maven工程，请先安装maven。

## 操作步骤

1. 参考[下载设备端SDK](/zh/iot/user-guide/download-device-sdks#concept-jlk-mjl-vdb "物联网平台提供各类设备端SDK，简化开发过程，使设备快速上云。")，下载[iotx-sdk-mqtt-java](https://aliyun-iot.oss-cn-hangzhou.aliyuncs.com/iotx-sdk-java/iotx-sdk-mqtt-java-20170526.zip?spm=a2c4g.11186623.2.11.641652276CMj67&file=iotx-sdk-mqtt-java-20170526.zip)并解压。
2. 打开Eclipse应用，选择file \> import \> Existing Maven Projects，导入上一步解压后的Java SDK文件。![打开应用导入Java SDK文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0372044751/p12652.png)
3. 双击打开SimpleClient4IOT.java文件。![双击打开文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0372044751/p12656.png)
4. 配置设备证书（ProductKey、DeviceName、DeviceSecret）和topic。修改deviceName、productKey、secret、subTopic、pubTopic变量，如下图所示。![修改变量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0372044751/p12658.png)

**说明** 进入阿里云物联网控制台，单击物联网平台的设备，选择查看，获取以上信息。subTopic和pubTopic与上图保持一致即可。  
```  
private static String subTopic = "/" + productKey + "/" + deviceName + "/user/get";  
private static String pubTopic = "/" + productKey + "/" + deviceName + "/user/update";  
```
5. 修改content，如下图所示。![修改content](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1372044751/p12662.png)  
```  
String content1 = "{'content':'shoen1','age':'20'}";  
String content2 = "{'content':'shoen2','age':'21'}";  
String content3 = "{'content':'shoen3','age':'22'}";  
MqttMessage message1 = new MqttMessage(content1.getBytes("utf-8"));  
MqttMessage message2 = new MqttMessage(content2.getBytes("utf-8"));  
MqttMessage message3 = new MqttMessage(content3.getBytes("utf-8"));  
message1.setQos(0);  
message2.setQos(0);  
message3.setQos(0);  
//System.out.println(System.currentTimeMillis() + "消息发布：---");  
sampleClient.publish(pubTopic, message1);  
sampleClient.publish(pubTopic, message2);  
sampleClient.publish(pubTopic, message3);  
```
6. 单击运行。  
运行成功后，返回如下信息。![运行后返回信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1372044751/p12664.png)