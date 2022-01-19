<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <!-- local JS -->
    <script type="text/javascript" src="js/app.js"></script>
    <!-- Bootstrap JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <title>Books</title>
<title>All the Books</title>
</head>
<body>

<h1><c:out value="${book.title}"></c:out></h1>
<br />
<p>Description: <c:out value="${book.description}"></c:out> </p>
<br />
<p>Number of Pages: <c:out value="${book.numberOfPages}"></c:out></p>
<br />
<p>Language: <c:out value="${book.language}"></c:out></p>

</body>
</html>