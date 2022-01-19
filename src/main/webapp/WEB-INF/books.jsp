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
<title>All Books</title>
</head>
<body>
<h1>All Books</h1>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Language</th>
            <th>Number of Pages</th>
        </tr>
    </thead>
    <tbody>
     <c:forEach items="${booksList}" var="book">
         <tr>
         <td><c:out value="${book.id}"></c:out></td>
         <td><c:out value="${book.title}"></c:out></td>
         <td><c:out value="${book.language}"></c:out></td>
         <td><c:out value="${book.numberOfPages}"></c:out></td>
         </tr>
         </c:forEach>
    </tbody>
</table>
</body>
</html>