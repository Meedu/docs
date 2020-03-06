
## `meedu.json` 文件

这个文件是插件必须的文件，它决定了 meedu 是否可以正确的加载到您的插件。
  
内容如下：  

```json
{
  "name": "测试",
  "version": "v1.0",
  "required": {}
}
```

| 字段 | 解释 |
| --- | --- |
| `name` | 插件名 |
| `version` | 插件版本 |
| `required` | 插件依赖，同 `composer.json` 的 `required` 字段 |

