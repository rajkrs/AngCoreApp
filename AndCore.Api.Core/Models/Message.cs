using AngCore.Api.Core.Enums;
namespace AngCore.Api.Core.Models
{
    public class Message
    {
        /// <summary>
        /// enum  <see cref="MessageType"/>
        /// </summary>
        public MessageType Type { get; set; }
        /// <summary>
        /// enum  <see cref="MessageCode"/>
        /// </summary>
        public MessageCode Code { get; set; }
        public string Value { get; set; }
    }
}
