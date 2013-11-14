Imports System.Collections.Generic
Imports System.Configuration
Imports System.Data
Imports System.Data.SqlClient

''' <summary>
''' Summary description for DataAccessFromSQL2
''' </summary>
Public Class DataAccessFromSQL2(Of T As {BaseEntity2, New})
    Public Shared Function ExecuteCommandAndFillInList(cmdName As String, queryParameters As Dictionary(Of String, Object)) As List(Of T)
        Dim rtnVal As New List(Of T)()
        ' We will return this
        Dim conn As New SqlConnection(ConfigurationManager.ConnectionStrings("DenihanConnStr").ConnectionString)
        Dim cmd As New SqlCommand(cmdName, conn)
        Dim dt As New DataTable()

        cmd.CommandType = CommandType.StoredProcedure

        ' Put in Parameters
        For Each pair As KeyValuePair(Of String, Object) In queryParameters
            cmd.Parameters.AddWithValue(pair.Key, pair.Value)
        Next

        conn.Open()
        Dim adapt As New SqlDataAdapter(cmd)
        adapt.Fill(dt)
        conn.Close()

        For Each dataRow As DataRow In dt.Rows
            Dim current As New T()
            current.FillInObject(dataRow)
            rtnVal.Add(current)
        Next

        Return rtnVal
    End Function
    Public Shared Sub ExecuteNonSelectCommand(cmdName As String, queryParameters As Dictionary(Of String, Object))
        Dim conn As New SqlConnection(ConfigurationManager.ConnectionStrings("DenihanConnStr").ConnectionString)
        Dim cmd As New SqlCommand(cmdName, conn)

        cmd.CommandType = CommandType.StoredProcedure

        ' Put in Parameters
        For Each pair As KeyValuePair(Of String, Object) In queryParameters
            cmd.Parameters.AddWithValue(pair.Key, pair.Value)
        Next

        ' Open database, execute command, fill in Data Table
        conn.Open()
        cmd.ExecuteNonQuery()
        conn.Close()
    End Sub
End Class