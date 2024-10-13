import OBSWebSocket from 'obs-websocket-js'

class OBSService {
  private obs: OBSWebSocket

  constructor() {
    this.obs = new OBSWebSocket()
  }

  async connect(address: string, password: string): Promise<void> {
    try {
      await this.obs.connect(address, password)
      console.log('Connected to OBS WebSocket server!')
    } catch (error) {
      console.error('Failed to connect to OBS:', error)
    }
  }

  async startStreaming(): Promise<void> {
    try {
      await this.obs.call('StartStream')
      console.log('Stream started')
    } catch (error) {
      console.error('Error starting stream:', error)
    }
  }

  async stopStreaming(): Promise<void> {
    try {
      await this.obs.call('StopStream')
      console.log('Stream stopped')
    } catch (error) {
      console.error('Error stopping stream:', error)
    }
  }

  // Add more methods to control OBS here...
}

export default new OBSService()
