Imports Microsoft.VisualBasic
Imports System.Data

Public Class BaseEntity2
#Region "Private Variables"
    Private m_id As Integer
    Private m_dbCode As String
#End Region

#Region "Constructor(s)"
    ''' <summary>Initiates a new item</summary>
    ''' <param name="id">Numeric Primary Key ID Number</param>
    ''' <param name="code">Code used for object, like a currency code</param>
    ''' <param name="name">Name of object</param>
    ''' <param name="dbCode">DB Code used in the database</param>
    Public Sub New(Optional id As Integer = -1, Optional code As String = "", Optional name As String = "", Optional dbCode As String = "")
        Me.m_id = id
        Me.m_dbCode = dbCode
    End Sub
#End Region

#Region "Public Methods"
    Public Overridable Sub FillInObject(data As DataRow)
        Me.m_id = Integer.Parse(data("Id" & Me.m_dbCode).ToString())
    End Sub
#End Region

#Region "Public Variables"
    ''' <summary>ID of object</summary>
    Public ReadOnly Property ID() As Integer
        Get
            Return Me.m_id
        End Get
    End Property
#End Region
End Class