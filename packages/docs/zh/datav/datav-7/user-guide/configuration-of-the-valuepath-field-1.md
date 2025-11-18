 

当图形用户界面GUI（Graphical User Interface）的渲染结构和数据结构不一致时，您可以通过valuePath字段处理对应的关系，使配置和数据一一对应。

## 使用场景

一般情况下，GUI渲染结构和数据结构是一致的，例如：

-   GUI渲染结构
    
    ```
    {
      "apply": {
        "type": "switch",
        "defalut": true
      },
      "snapTrd": {
        "type": "stepper",
        "default": 20
      }
    }
    ```
    
-   数据结构
    
    ```
    {
      "apply": true,
      "snapTrd": 20
    }
    ```
    

以上示例中，在进行GUI渲染的时候，`snapTrd`和`apply`处于同一层级。但实际数据结构中，`snapTrd`处于`space`对象中，`space`和`apply`处于同一层级，此时可以使用`valuePath`进行处理，将配置与数据对应起来。例如：

-   配置
    
    ```
    {
      "apply": {
        "type": "switch",
        "defalut": true
      },
      "snapTrd": {
        "type": "stepper",
        "default": 20,
        "valuePath": "space.snapTrd"
      }
    }
    ```
    
-   数据（加入`valuePath`后提取的默认值和抛出值的结构）
    
    ```
    {
      "apply": true,
      "space": {
        "snapTrd": 20
      }
    }
    ```
    

## 配置规则

-   当在基础控件中配置`valuePath`时，直接添加即可，详情请参见[示例一](#section-zue-pkh-jbg)。
    
-   当在高频套件、group和menu中配置`valuePath`时，它们的子元素会继承父元素的`valuePath`，详情请参见[示例二](#section-e2q-u29-wqv)。
    
-   当在tabs中配置`valuePath`时，tabs的子元素只能继承父元素的`valuePath`，而不能配置自己的`valuePath`，详情请参见[示例三](#section-eiv-we1-jmb)。
    

## 示例一

-   配置
    
    ```
    {
      "paddingTop": {
        "type": "stepper",
        "name": "top",
        "default": 3,
        "valuePath": "chart.padding.top"
      },
      "paddingLeft": {
        "type": "hidden",
        "name": "left",
        "default": 10
      }
    }
    ```
    
-   数据
    
    ```
    {
      "chart": {
        "padding": {
          "top": 3
        }
      },
      "paddingLeft": 10
    }
    ```
    

## 示例二

-   配置
    
    ```
    {
      "padding": {
        "type": "group",
        "name": "组",
        "default": {
          "top": 3,
          "left": 10
        },
        "valuePath": "chart.padding",
        "children": {
          "top": {
            "type": "stepper",
            "valuePath": "abc.top"
          },
          "left": {
            "type": "stepper"
          }
        }
      }
    }
    ```
    
-   数据
    
    ```
    {
      "abc": {
        "top": 3.5
      },
      "chart": {
        "padding": {
          "left": 10
        }
      }
    }
    ```
    

## 示例三

-   配置
    
    ```
    {
      "padding": {
        "type": "tabs",
        "name": "组",
        "default": [
          {
            "top": 3,
            "left": 10
          }
        ],
        "valuePath": "chart.padding",
        "template": {
          "name": "系列<%= i + 1%>",
          "description": "这是系列<%= i + 1%>",
          "children": {
            "top": {
              "type": "stepper"
            },
            "left": {
              "type": "stepper"
            }
          }
        }
      }
    }
    ```
    
-   数据
    
    ```
    {
      "chart": {
        "padding": [
          {
            "top": 3,
            "left": 10
          }
        ]
      }
    }
    ```