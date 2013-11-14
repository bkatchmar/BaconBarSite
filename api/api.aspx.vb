Imports System.Collections.Generic
Imports System.Net.Mail
Imports System.Web.Services

Partial Public Class api_api
    Inherits System.Web.UI.Page
    Private Structure UserData
        Public firstName As String
        Public lastName As String
        Public email As String
    End Structure
    Private Structure CateringData
        Public name As String
        Public phone As String
        Public email As String
    End Structure

    Private Function SubmitFrontPageForm(userData As NameValueCollection) As Dictionary(Of String, String)
        Dim extractedFromObject As UserData = ConvertObjectToUserDataStruct(userData)

        Dim usersFoundWithEmailAddress As List(Of ASDCUser2) = ASDCUser2.GetEmailsByAddress(extractedFromObject.email)

        Dim rtnVal As New Dictionary(Of String, String)()

        If usersFoundWithEmailAddress.Count > 0 Then
            rtnVal("Message") = "existed"
        Else
            ASDCUser2.EnterNewEmail(extractedFromObject.firstName, extractedFromObject.lastName, extractedFromObject.email)
            rtnVal("Message") = "completed"
        End If

        Return rtnVal
    End Function

    Private Function CateringForm(userData As NameValueCollection) As Dictionary(Of String, String)
        Dim extractedFromObject As CateringData = ConvertCateringObjectToStruct(userData)

        Dim objEmail As New MailMessage()
        Dim objSMTP As New SmtpClient()

        objEmail.[To].Add("brian.katchmar@denihan.com")
        objEmail.From = New MailAddress("primehouse@jameshotels.com")
        objEmail.Subject = "Bacon Bar Catering Form Submission"
        objEmail.Body = "<div>Name: " & extractedFromObject.name & "</div><div>Phone: " & extractedFromObject.phone & "</div><div>Email: " & extractedFromObject.email & "</div>"
        objEmail.IsBodyHtml = True

        objSMTP.Host = "192.168.99.50"
        objSMTP.Send(objEmail)

        ' Return Object
        Dim rtnVal As New Dictionary(Of String, String)()
        rtnVal("Message") = "completed"

        Return rtnVal
    End Function

    Private Shared Function ConvertObjectToUserDataStruct(userData As NameValueCollection) As UserData
        Dim processed As New UserData()
        processed.firstName = userData.GetValues("requestFirstName")(0)
        processed.lastName = userData.GetValues("requestLastName")(0)
        processed.email = userData.GetValues("requestEmail")(0)
        Return processed
    End Function

    Private Shared Function ConvertCateringObjectToStruct(userData As NameValueCollection) As CateringData
        Dim processed As New CateringData()
        processed.name = userData.GetValues("requestFullName")(0)
        processed.phone = userData.GetValues("requestPhone")(0)
        processed.email = userData.GetValues("requestEmail")(0)
        Return processed
    End Function

    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        Dim requestName As String
        requestName = Request.Form.GetValues("requestName")(0)

        Dim rtnVal As New Dictionary(Of String, String)()

        ' Handle the request
        If requestName = "SubmitFrontPageForm" Then
            rtnVal = SubmitFrontPageForm(Request.Form)
        ElseIf requestName = "CateringForm" Then
            rtnVal = CateringForm(Request.Form)
        Else
            rtnVal.Add("Message", "invalid")
        End If

        Response.ClearHeaders()
        Response.ContentType = "text/html"
        Response.Write("<div>")
        Response.Write("<div id='answer'>" & rtnVal("Message") & "</div>")
        Response.Write("</div>")
    End Sub
End Class