Imports Microsoft.VisualBasic
Imports System.Collections.Generic

Public Class ASDCUser2
    Inherits BaseEntity2
#Region "Private Variables"
    Private m_email As String
    Private m_firstName As String
    Private m_lastName As String
#End Region

#Region "Constructor(s)"
    Public Sub New()
        MyBase.New(dbCode:="User")
        Me.m_firstName = ""
        Me.m_lastName = ""
        Me.m_email = ""
    End Sub
#End Region

#Region "Public Methods"
    Public Overrides Sub FillInObject(data As System.Data.DataRow)
        MyBase.FillInObject(data)
        Me.m_firstName = data("first_name").ToString()
        Me.m_lastName = data("last_name").ToString()
        Me.m_email = data("email").ToString()
    End Sub
    Public Shared Function GetEmailsByAddress(emailAddress As String) As List(Of ASDCUser2)
        Dim passed As New Dictionary(Of String, Object)()
        passed.Add("@EMAIL", emailAddress.ToLower())
        Return DataAccessFromSQL2(Of ASDCUser2).ExecuteCommandAndFillInList("spGetUserByEmail", passed)
    End Function
    Public Shared Sub EnterNewEmail(Optional firstName As String = "", Optional lastName As String = "", Optional email As String = "", Optional zip As String = "")
        Dim passed As New Dictionary(Of String, Object)()
        passed.Add("@fn", firstName)
        passed.Add("@ln", lastName)
        passed.Add("@email", email)
        passed.Add("@source", "baconbar.com")
        passed.Add("@zip", zip)

        DataAccessFromSQL2(Of ASDCUser2).ExecuteNonSelectCommand("spUserAddShort", passed)
    End Sub
#End Region

#Region "Public Variables"
    Public Property FirstName() As String
        Get
            Return Me.m_firstName
        End Get
        Set(value As String)
            Me.m_firstName = value
        End Set
    End Property
    Public Property LastName() As String
        Get
            Return Me.m_lastName
        End Get
        Set(value As String)
            Me.m_lastName = value
        End Set
    End Property
    Public Property Email() As String
        Get
            Return Me.m_email
        End Get
        Set(value As String)
            Me.m_email = value
        End Set
    End Property
#End Region
End Class