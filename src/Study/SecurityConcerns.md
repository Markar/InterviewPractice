### Improve security in web applications

## Data protection
- Ensuring databases running on RDS and all EBS volumes are encrypted
- Elastic Load Balancing (ELB) have the appropriate SSL Certificate and are using HTTPS listener
- All S3 buckets have secure policies enabled that require encryption for objects stored in buckets

## Identity and Access management
- Ensuring IAM policies exist for the EC2 IAM roles
- AutoScaling Group Launch-Configurations are configured appropriately
- SNS Topics do not allow the “Everyone” group to publish and subscribe

## Business Continuity
- Auto-Scaling Groups are associated with an ELB and are configured for multiple Availability Zones (AZs)
- Amazon Machine Images (AMIs) are configured for the Auto-Scaling Launch Configuration
- RDS backup retention policies are set in place