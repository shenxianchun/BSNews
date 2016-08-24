<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>新闻发布</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css"></link>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/semantic.min.css"></link>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/publish.css"></link>
</head>
<body >
	<div style="width:100%;height:400px; margin-top:0px;margin-left:0px;">
	<form action="addNews" method="post">
      <h1>新闻编辑</h1>
      <table class="ui celled table">
    <thead>
      <tr><th style="width:650px;">名称项</th>
      <th>编辑项</th>
    </tr></thead>
    <tbody>
      <tr>
        <td>
          <h4 class="ui image header">
           标题
        </h4></td>
        <td>
          <div class="ui input fluid">
              <input id="title" type="text" placeholder="新闻标题"/>
          </div>
        </td>
      </tr>
      <tr>
         <td>
          <h4 class="ui image header">
          编辑
        </h4></td>
        <td>
          <div class="ui input fluid">
              <input id="author" type="text" placeholder="编辑"/>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <h4 class="ui image header">
          发布时间
        </h4></td>
        <td>
          <div class="ui input fluid">
              <input id="publishtime" type="date" placeholder="发布时间"/>
          </div>
        </td>
      </tr>
      
      <tr>
         <td>
          <h4 class="ui image header">
          关键词
        </h4></td>
        <td>
          <div class="ui input fluid">
              <input id="keyword" type="text" placeholder="50字以内"/>
          </div>
        </td>
      </tr>
      <tr>
         <td>
          <h4 class="ui image header">
          所属分类
        </h4></td>
        <td>
         <div style="text-align:center;"> <select id="category" style="width:200px;" class="ui dropdown">      
          <!--   <option value="">所属分类</option>
            <option value="1">Male</option>
            <option value="2">Female</option> -->
          </select></div>
        </td>
      </tr>
    </tbody>
  </table>
  </form>
  </div>
   <div style="width:1040px;margin-top:20px;margin-left:auto;margin-right:auto;padding:5px;">
          <h1 style="margin-left:-156px;">编辑内容</h1>
          <script id="editor" type="text/plain" style="width:1024px;height:500px"></script>
   </div>
   <div style="width:1000px;height:120px;margin-top:50px;margin-left:auto;margin-right:auto;display: block;">
      	<div id="btn">
	      <button class="ui green button" id="save">确认提交</button>
	      <button class="ui orange button">注意事项</button>
	      <button class="ui blue button">流程说明</button>   
	     </div>   
    </div> 

<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/semantic.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/publish.js"></script>
<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath}/js/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath}/js/ueditor/ueditor.all.min.js"> </script>
    <!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
    <!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath}/js/ueditor/lang/zh-cn/zh-cn.js"></script>
</body>
</html>
