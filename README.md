# Dự án Ecommerce

- **Back End**: .NET  
- **Front End**: ReactJs  

Dự án tập trung vào quá trình pipeline **DevSecOps** sử dụng các công cụ như:  
VMWare, EC2, GitLab, GitLab-CI, Harbor, SonarQube, Trivy, Arachni, K6.  
Sử dụng **Docker** để triển khai dự án.

---

## Pipeline DevSecOps

Pipeline bao gồm **7 quy trình**:

![Pipeline Diagram](images/pipeline.jpg)

1. **Build**  
   - Sử dụng GitLab Runner để chạy CICD với executor là shell  
   - Clone code trên server rồi build  

2. **Scan source code**  
   - Sử dụng SonarQube Scanner để scan code  
   - SonarQube Server để nhận kết quả, quality gate mặc định  
   ![Sonarqube Scan](images/sonarqube-real.jpg)

3. **Scan image**  
   - Sử dụng Trivy để scan image  
   - Lưu artifacts là file HTML  
   ![Trivy Scan](images/trivy-scan.jpg)

4. **Push to private Registry**  
   - Cài đặt Harbor trên EC2, thêm cert bằng certbot  
   - Tạo các project riêng cho dự án và lưu các image  
   ![Harbor](images/pipeline.jpg)

5. **Deploy**  
   - Pull image trên Harbor và run container  

6. **Security Scan Website**  
   - Sử dụng Arachni (cài đặt bằng Docker, dễ tích hợp vào pipeline)  
   ![Arachni](images/web-security.jpg)

7. **Performance testing**  
   - Sử dụng K6 và viết các file `.js` để giả lập lưu lượng truy cập  
   - Artifacts là file CSV  
   ![K6](images/performance-test.jpg)
