const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Dashboard APIs
  async getDashboardStats() {
    return this.request('/dashboard/stats');
  }

  async healthCheck() {
    return this.request('/dashboard/health');
  }

  // Hotspot APIs
  async getAllHotspots() {
    return this.request('/hotspots');
  }

  async createHotspot(hotspot: any) {
    return this.request('/hotspots', {
      method: 'POST',
      body: JSON.stringify(hotspot),
    });
  }

  async updateHotspot(id: number, hotspot: any) {
    return this.request(`/hotspots/${id}`, {
      method: 'PUT',
      body: JSON.stringify(hotspot),
    });
  }

  async deleteHotspot(id: number) {
    return this.request(`/hotspots/${id}`, {
      method: 'DELETE',
    });
  }

  // Report APIs
  async getAllReports() {
    return this.request('/reports');
  }

  async createReport(report: any) {
    return this.request('/reports', {
      method: 'POST',
      body: JSON.stringify(report),
    });
  }

  async updateReportStatus(id: number, status: string) {
    return this.request(`/reports/${id}/status?status=${status}`, {
      method: 'PUT',
    });
  }

  async getReportsByStatus(status: string) {
    return this.request(`/reports/status/${status}`);
  }

  // Analytics APIs
  async getAnalytics() {
    return this.request('/analytics');
  }

  async getRainfallData() {
    return this.request('/analytics/rainfall');
  }

  async getHotspotDistribution() {
    return this.request('/analytics/distribution');
  }

  async getPredictions() {
    return this.request('/analytics/predictions');
  }
}

export const apiService = new ApiService();
