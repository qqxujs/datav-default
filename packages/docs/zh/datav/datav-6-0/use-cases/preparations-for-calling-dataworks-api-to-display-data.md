# 准备工作 %{#106828}% 

本文为您介绍在使用DataV调用DataWorks数据服务API展示数据成果前，需要完成的准备工作。

1. [创建DataWorks工作空间](https://help.aliyun.com/document%5Fdetail/74293.html)，选择region（本案例选择华东1），勾选MaxCompute和数据开发  
![创建datawork工作空间](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122921/156620387838475_zh-CN.png)
2. 购买[DataV产品企业版](/zh/datav/datav-6-0/product-overview/what-is-datav#ul-rg4-jkj-p2b)。
3. [连接交互式分析（Lightning）服务](/zh/maxcompute/getting-started-3#concept-186666)。  
由于本案例使用的是Lightning数据源，故需要首先连接MaxCompute Lightning服务。
4. 开通API网关服务。  
根据界面提示，开通API网关服务，以确保您能够使用DataWorks数据服务的API功能。
5. 准备好本案例的数据表并上传数据。  
本案例使用Lightning数据源，故首先需要在MaxCompute控制台中[创建表](/zh/maxcompute/getting-started/create-tables-1#concept-rkk-kcy-5db "本文为您演示一个完整的使用MaxCompute进行银行贷款购房人员分析的过程。您可以参考每个步骤的示例部分进行实际操作。")，并[上传数据](/zh/maxcompute/getting-started/import-data-to-tables#concept-amj-mjy-5db "在您完成表格的创建后，就可以使用Tunnel命令导入数据到MaxCompute了。")。  

  * 本案例使用的建表DDL语句如下。  
  ```  
  CREATE TABLE IF NOT EXISTS `demo_trade_amount` (  
  `id` bigint COMMENT 'id',  
  `date1` string COMMENT '成交日期',  
  `amount` string COMMENT '成交额'  
  ) ;  
  ```
  * 本案例最终的表结构和部分数据如下图所示。  
  ![表结构和部分数据展示](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122921/156620387838476_zh-CN.png)