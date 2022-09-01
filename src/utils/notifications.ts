export function notify(title: string, body?: string) {
  const notification = new Notification(title, {
    icon: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFl9dQInMEJOA/company-logo_200_200/0/1657657232692?e=2147483647&v=beta&t=FAtdmNDTyntw_HSVx2g_JmG1MvoWFfHGwflYRs9G-x0',
    body,
  })

  return notification
}
