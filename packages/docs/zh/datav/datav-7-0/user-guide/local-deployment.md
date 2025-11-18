私有部署是指将DataV-Board 7.0（数据看板）开发的页面整体打包下载，并安装部署到您的企业内网中运行。例如，若您的企业内网中有一个数据库，仅能在企业内网中访问，无法通过公网访问，则线上页面便无法连接到该数据库。在这种情况下，私有部署将有效地解决您的问题。

## 私有部署对服务器的配置要求

系统和硬件最低要求如下：

- CentOS 7.0 兼容的64位Linux系统
- 8核4GHz 或等效性能的 x86\_64 or ARM64 处理器
- 16GB内存
- 至少100GB硬盘
- 系统预先安装 Docker（版本 18.09.9）

## **使用限制**

- 仅有尊享版用户才可以使用私有部署功能。
- 私有部署不包含地图瓦片数据。
- 私有部署支持的数据源类型：HTTP API、MySQL、SQLServer、Oracle、PostgreSQL和静态数据。
  
  **说明**
  
  私有部署过程中，打包的数据看板将保留原有数据源类型及相关配置。

## 获取私有部署

1. 进入[DataV产品购买](https://common-buy.aliyun.com/?spm=a2c0j.14082271.779857.datav-action1.605d16baPTDRjC&commodityCode=datav&request=%7B%22versionType%22%3A%22compVersion%22%2C%22ord_time%22%3A%22%5B%5Cn%20%201%2C%5Cn%20%20%5C%22Month%5C%22%5Cn%5D%22%7D#/buy)页面，选择购买DataV尊享版本。
2. 登录[DataV控制台](https://datav.aliyun.com/)。
3. 在**我的可视化**页面中，选择一个可视化应用，单击**编辑**。
4. 在PC端画布编辑器中，单击页面右上角的**下载页面**图标。
   
   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8174891271/p825942.png)

<!--THE END-->

5. 在**大屏打包**对话框中根据提示下载部署包和可视化应用包。
   
   1. 单击**部署包**，进入7.x 运行环境部署包下载页面，可进行运行环境下载
      
      ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8174891271/p825948.png)
      
      **重要**
      
      运行包和账号绑定，只能部署运行开通尊享账号或线下版内所有下载的可视化应用。
      
      7.x 运行环境由两部分组成：部署包以及授权文件 Key。
      
      - 7.x 部署包支持 X86 和 ARM 两种架构，可以分别单击“**生成部署包**”并生成对应架构的部署包（耗时大约 10 分钟），即可点击“**下载部署包**”进行下载。
      - 线下版用户单击“**下载Key**”后，即可生成用户唯一标识的授权文件。
      - 尊享版用户在**步骤2**后，自动跳转至**用户中心** &gt; **私有部署**面板，输入机器码，生成对应的测试或正式Key。
   2. 单击“**打包记录**”，自动跳转到可视化应用打包页面，单击“**开始打包**”，就会创建当前大屏的打包任务，打包成功后，单击“**下载**”即可
      
      ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8174891271/p826004.png)
      
      ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8174891271/p826005.png)
6. 部署 DataV 服务
   
   1. 将下载的运行环境压缩包上传到您的服务器上。
   2. 在服务器新建一个目录。
      
      例如，执行`mkdir -p datav_runtime`命令新建一个名称为datav\_runtime的目录。
   3. 使用unzip命令解压runtime.zip到datav\_runtime目录。
      
      ```plaintext
      unzip runtime.zip -d datav_runtime
      ```
      
      **说明**
      
      确保您已经将runtime.zip下载至当前目录或知道其路径。
   4. 复制runtime.keydatav\_runtime目录。
      
      ```plaintext
      cp path/to/runtime.key datav_runtime/
      ```
      
      **说明**
      
      确保runtime.key文件存在于当前目录或指定路径。
   5. 启动和检查服务。服务默认为停止状态。
      
      进入datav\_runtime目录，执行以下命令：
      
      ```plaintext
      cd datav_runtime
      ```
      
      - 启动服务
        
        ```plaintext
        ./datav start
        ```
        
        **说明**
        
        如果在执行./datav start时收到“Permission denied”的错误，请按照以下步骤添加运行权限，先执行chmod +x datav修改权限，然后再次尝试启动程序./datav start。
      - 停止服务
        
        ```plaintext
        ./datav stop
        ```
      - 重启服务
        
        ```plaintext
        ./datav restart
        ```
      - 查看服务状态
        
        ```plaintext
        ./datav list
        ```
      - 查看启动日志
        
        ```plaintext
        ./datav logs <NAME> # <NAME> 可使用./datav list 获得
        ```
      - 查看运行日志
        
        ```plaintext
        docker exec -it -w /home/admin/honeycomb/logs datav-service bash
        ```
   6. 配置修改
      在./datav目录下创建config.yaml，可选配置如下：
      
      ```yaml
      DataDir: "" # 数据保存路径，默认当前目录
      MainPort: 7001 # 服务端口
      ```

## **重置密码**

登录服务器，执行

```plaintext
./datav start reset-password -- <UserName> [<Password>]
```

**说明**

- &lt;UserName&gt;：为要重置密码的用户名。
- \[&lt;Password&gt;]：为可选的新密码，不填默认初始密码。